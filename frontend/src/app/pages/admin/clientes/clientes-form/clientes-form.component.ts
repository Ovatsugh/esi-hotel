import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss']
})
export class ClientesFormComponent implements OnInit {
  dados: any = {tipo: 1}
  constructor(private activeModal: NgbActiveModal, private service: ClienteService) { }

  ngOnInit(): void {
  }
  
  close(params = undefined) {
    this.activeModal.close(params)
  }
  getAddress(cep) {
    this.service.getAddress(cep).then( (res: any) => {
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

}
