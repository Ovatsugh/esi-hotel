import { MessageService } from './../../../../services/message.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from 'src/app/services/cliente.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss']
})
export class ClientesFormComponent implements OnInit {
  dados: any = { tipo: 1 }
  @Input() data: any
  constructor(private activeModal: NgbActiveModal, private service: ClienteService, private messageService: MessageService) { }

  ngOnInit(): void {
    if (this.data.id > 0) {
      this.getSingle()

    }
  }

  getSingle() {
    this.messageService.loading(true)
    this.service.getClient(this.data.id).then(res => {
      this.dados = res
    }).catch(err => {
      console.log(err.error.message)
    }).finally(() => {
      this.messageService.loading()
    })
  }

  close(params = undefined) {
    this.activeModal.close(params)
  }
  getAddress(cep) {
    cep = cep.replace(/[^0-9]/g, '')
    this.service.getAddress(cep).then((res: any) => {
      console.log("Cep", res)
      if (res.erro) {
        return
      }
      this.dados.logradouro = res.logradouro
      this.dados.cidade = res.localidade
      this.dados.complemento = res.complemento
      this.dados.bairro = res.bairro
      this.dados.uf = res.uf
    })
  }

  submit(form: NgForm) {
    console.log(form)
    if (!form.valid) {
      console.log("Tem algum campo errado >:(")
      return
    }
    if (this.dados.id > 0) {
      this.EditarCliente()
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

  EditarCliente() {
    this.messageService.loading(true)
    this.service.salvar(this.dados, this.dados.id).then(res => {
      console.log(res)
      this.messageService.loading()
      this.close(true)
    }).catch(err => {
      this.messageService.loading()
      console.log(err)

    })
  }

}



