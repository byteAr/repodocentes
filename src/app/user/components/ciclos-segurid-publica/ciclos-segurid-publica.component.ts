import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-ciclos-segurid-publica',
  templateUrl: './ciclos-segurid-publica.component.html',
  styleUrls: ['./ciclos-segurid-publica.component.css']
})
export class CiclosSeguridPublicaComponent implements OnInit {

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
