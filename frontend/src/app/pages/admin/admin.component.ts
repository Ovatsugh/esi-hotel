import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  menu = [
    {titulo: 'Recepção ', icon: 'fa-home', rota: '/recepcao' },
    {titulo: 'Clientes', icon: 'fa-users', rota: '/clientes' },
    {titulo: 'Produtos', icon: 'fa-boxes', rota: '/products' },
    {titulo: 'quartos', icon: 'fa-door-closed', rota: '/quartos' }



  ]
  constructor() { }

  ngOnInit(): void {
  }

}
