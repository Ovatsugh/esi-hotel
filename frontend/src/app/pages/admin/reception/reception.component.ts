import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { QuartoService } from 'src/app/services/quarto.service';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.scss']
})
export class ReceptionComponent implements OnInit {
  quartos = []
  constructor(private service: QuartoService, private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
    this.geteReception()
  }

  geteReception() {
    this.messageService.loading(true)
    this.service.getReception().then(res => {
      this.quartos = res
    }).finally(() => {
      this.messageService.loading()
    })
  }

  openQuarto(quarto) {
    if (quarto.open == 1) {
      this.startDiaria(quarto)
    } else {
      this.router.navigate([`/recepcao/detalhe`], {queryParams: {id: quarto.using.id}})
    }
  }

  startDiaria(quarto) {
    this.messageService.swal.fire({
      title: 'Iniciar diária.',
      html: `Iniciar diária no quarto: ${quarto.nome}?`,
      confirmButtonText: 'confirmar',
      cancelButtonText: 'Voltar',
      showCancelButton: true
    }).then(res => {
      if (res.isConfirmed) {
        this.messageService.loading(true)
        this.service.startDiaria({ quarto_id: quarto.id }).then(res => {
          this.messageService.loading()
          this.router.navigate([`/recepcao/detalhe`], {queryParams: {id: res} })
        }).catch(err => {
          this.messageService.toastError(err.error.mesage)
          this.messageService.loading()
        })
      }
    })
  }


}