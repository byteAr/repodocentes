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
      {label:'Inicio'},
      {label:'Unidad Académica Escuela Superior'},
      {label:'Oferta Académica'},
      {label:'Ciclos de Licenciatura'},
      {label:'Licenciatura en Segurid Publica'}
  ];
  }

}
