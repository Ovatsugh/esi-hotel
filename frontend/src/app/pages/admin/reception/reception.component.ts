import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { QuartoService } from 'src/app/services/quarto.service';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.scss']
})
export class ReceptionComponent implements OnInit {

  quartos = []
  constructor(private service: QuartoService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.geteReception()
  }

  geteReception() {
    this.messageService.loading()
    this.service.getReception().then(res => {
      this.quartos = res
    }).finally(() => {
      this.messageService.loading()
    })
  }


}
