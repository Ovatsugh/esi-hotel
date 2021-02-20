import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'src/app/services/message.service';
import { QuartoService } from 'src/app/services/quarto.service';
import { QuartoFormComponent } from './quarto-form/quarto-form.component';

@Component({
  selector: 'app-quartos',
  templateUrl: './quartos.component.html',
  styleUrls: ['./quartos.component.scss']
})
export class QuartosComponent implements OnInit {
  datasource: any = [];
  constructor(private modalCtrl: NgbModal,  private quartoService: QuartoService,  private messageService: MessageService) { }

  ngOnInit(): void {
    this.listing()
  }

  openQuarto(item = {}) {
    const modalRef = this.modalCtrl.open(QuartoFormComponent, { size: "md", backdrop: "static" })
    modalRef.componentInstance.data = item
    modalRef.result.then(res => {
      if (res) {
        this.listing()
      }
    })
  }

  delete(id: any) {
    this.messageService.loading(true)
    this.quartoService.delete(id).then((res: any) => {
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
      html: `Realmente deseja excluir o quarto: <b>${dados.nome}</b>?`,
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

  listing(): void {
    this.messageService.loading(true)
    this.quartoService.listing().then(res => {
      this.datasource = res
    }).catch(err => {
      this.messageService.toastError(err.error.message)
      console.log(err)
    }).finally(() => {
      this.messageService.loading()
    })

  }

}
