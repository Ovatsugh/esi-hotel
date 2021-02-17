import { MessageService } from './../../../services/message.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ProductFormComponent } from './product-form/product-form.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  datasource: any = [];
  constructor(private productService: ProductService, private modalCtrl: NgbModal, private messageService: MessageService) { }

  ngOnInit(): void {
    this.listing()
  }

  listing(): void {
    this.messageService.loading(true)
    this.productService.listing().then(res => {
      this.datasource = res
    }).catch(err => {
      this.messageService.toastError(err.error.message)
      console.log(err)
    }).finally(() => {
      this.messageService.loading()
    })

  }

  deleteConfirm(dados) {
    this.messageService.swal.fire({
      title: "Atenção!",
      html: `Realmente deseja excluir o produto: <b>${dados.nome}</b>?`,
      icon: 'warning',
      confirmButtonText: "Confirmar",
      showCancelButton: true,
      cancelButtonText: "Voltar"
    }).then(res => {
      if (res.isConfirmed) {
        this.delete(dados.id)
      }
    })
  }

  delete(id: any) {
    this.messageService.loading(true)
    this.productService.delete(id).then((res: any) => {
      console.log(res);
      this.listing();
      this.messageService.toastSucess(res.message)
    }).catch(err => {
      console.log(err)
      this.messageService.toastError(err.error.message)
    }).finally(() => {
      this.messageService.loading()
    })
  }

  
  open(item = {}) {
    const modalRef = this.modalCtrl.open(ProductFormComponent, { size: "md", backdrop: "static" })
    modalRef.componentInstance.data = item
    modalRef.result.then(res => {
      if (res) {
        this.listing()
      }
    })
  }


}
