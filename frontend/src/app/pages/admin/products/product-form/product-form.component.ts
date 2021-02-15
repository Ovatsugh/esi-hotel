import { ProductService } from './../../../../services/product.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  dados: any = {}
  @Input() data: any
  constructor(private activeModal: NgbActiveModal, private service: ProductService) { }

  ngOnInit(): void {
    if (this.data.id > 0) {

      this.getSingle()
    }
  }


  close(params = undefined) {
    this.activeModal.close(params)
  }

  getSingle() {
  this.service.getProduct(this.data.id).then(res => {
    this.dados = res
  }).catch(err => {
    console.log(err.error.message)
  })
  

  }

  submit(form: NgForm) {
    console.log(form.value)
    if (!form.valid) {
      console.log("Tem algum campo errado")
      return
    }
    if (this.dados.id > 0) {
      this.EditarProduto()
    }
    else {
      this.cadastrar()
    }

  }

  cadastrar() {
    this.service.create(this.dados).then(res => {
      console.log(res)
      this.close(true)
    }).catch(err => {
      console.log(err)
    })

  }



  EditarProduto() {
    this.service.salvar(this.dados, this.dados.id).then(res => {
      console.log(res)
      this.close(true)
    }).catch(err => {
      console.log(err)
    })
  }

}