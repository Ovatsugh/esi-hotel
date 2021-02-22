import { MessageService } from './../../../../services/message.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuartoService } from 'src/app/services/quarto.service';

@Component({
  selector: 'app-reception-detalhe',
  templateUrl: './reception-detalhe.component.html',
  styleUrls: ['./reception-detalhe.component.scss']
})
export class ReceptionDetalheComponent implements OnInit {
   
  detalhes: any = {}
  constructor(private messageService: MessageService, private activeRout: ActivatedRoute, private service: QuartoService) { }

  ngOnInit(): void {
    this.activeRout.queryParams.subscribe(res => {
      if(res.id) {
        this.usingId(res.id)
      }
      console.log(res)
    }).unsubscribe()
  }

  usingId(id) {
   this.messageService.loading(true)
   this.service.usingId(id).then(res => {
     this.messageService.loading()
     this.detalhes = res
   }).catch(err => {
    this.messageService.toastError(err.error.message)
    this.messageService.loading()
   })
   
  }
}
