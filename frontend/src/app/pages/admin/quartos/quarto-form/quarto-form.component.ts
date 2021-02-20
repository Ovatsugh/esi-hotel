import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'src/app/services/message.service';
import { QuartoService } from 'src/app/services/quarto.service';

@Component({
  selector: 'app-quarto-form',
  templateUrl: './quarto-form.component.html',
  styleUrls: ['./quarto-form.component.scss']
})
export class QuartoFormComponent implements OnInit {

  dados: any = {status: 1}
  @Input() data: any
  constructor(private activeModal: NgbActiveModal, private messageService: MessageService, private service: QuartoService,) { }

  ngOnInit(): void {
    if (this.data.id > 0) {

      this.getSingle()
  }
}

 close(params = undefined) {
    this.activeModal.close(params)
  }

  getSingle() {
    this.messageService.loading(true)
    this.service.getQuartos(this.data.id).then(res => {
      this.dados = res
    }).catch(err => {
      console.log(err.error.message)
    }).finally(() => {
      this.messageService.loading()
    })
  }

  cadastrar() {
    this.messageService.loading(true)
    this.service.create(this.dados).then(res => {
      this.messageService.loading()
      console.log(res)
      this.close(true)
    }).catch(err => {
       this.messageService.loading()
      console.log(err)
    })

  }

  EditarQuarto() {
    this.messageService.loading(true)
    this.service.salvar(this.dados, this.dados.id).then(res => {
      this.messageService.loading()
      console.log(res)
      this.close(true)
    }).catch(err => {
      this.messageService.loading()
      console.log(err)
    })
  }

  
  submit(form: NgForm) {
    console.log(form.value)
    if (!form.valid) {
      console.log("Tem algum campo errado")
      return
    }
    if (this.dados.id > 0) {
      this.EditarQuarto()
    }
    else {
      this.cadastrar()
    }

  }

}


