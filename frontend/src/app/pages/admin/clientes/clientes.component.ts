import { ClienteService } from 'src/app/services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  datasource: any = [];
  constructor(private modalCtrl: NgbModal, private clienteService: ClienteService,  private messageService: MessageService) { }

  ngOnInit(): void {
    this.listing()
  }


  openCliente(item = {}) {
    const modalRef = this.modalCtrl.open(ClientesFormComponent, { size: "lg", backdrop: "static" })
    modalRef.componentInstance.data = item 
    modalRef.result.then(res => {
      if (res) {
        this.listing()
      }
    })

  }




  listing(): void {
    this.messageService.loading(true)
    this.clienteService.listing().then(res => {
      this.datasource = res
    }).catch(err => {
      this.messageService.toastError(err.error.message)
      console.log(err)
    }).finally(() => {
      this.messageService.loading()
    })

  }

  delete(id: any) {
    this.messageService.loading(true)
    this.clienteService.delete(id).then((res: any) => {
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

  deleteConfirm(dados) {
    this.messageService.swal.fire({
      title: "Atenção!",
      html: `Realmente deseja excluir o cliente: <b>${dados.razao}</b>?`,
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
  

}



