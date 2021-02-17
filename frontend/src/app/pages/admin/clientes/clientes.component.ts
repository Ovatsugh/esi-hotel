import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor(private modalCtrl: NgbModal) { }

  ngOnInit(): void {
  }


  openCliente() {
    const modalRef = this.modalCtrl.open(ClientesFormComponent, { size: "lg", backdrop: "static" })
    modalRef.componentInstance
  }
}
