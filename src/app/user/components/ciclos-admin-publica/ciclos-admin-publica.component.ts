import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-ciclos-admin-publica',
  templateUrl: './ciclos-admin-publica.component.html',
  styleUrls: ['./ciclos-admin-publica.component.css']
})
export class CiclosAdminPublicaComponent implements OnInit {
  
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio', routerLink: '/'},
      {label:'Unidad Académica Escuela Superior', routerLink: '/uuaa/escusuper'},
      {label:'Oferta Académica', routerLink: '/uuaa/escusuper/oferta/ciclos'},
      {label:'Licenciatura en Administración Pública', disabled: true}
  ];
  }

}
