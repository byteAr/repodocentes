import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-ciclos-investigacion',
  templateUrl: './ciclos-investigacion.component.html',
  styleUrls: ['./ciclos-investigacion.component.css']
})
export class CiclosInvestigacionComponent implements OnInit {
  
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio'},
      {label:'Unidad Académica Escuela Superior'},
      {label:'Oferta Académica'},
      {label:'Ciclos de Licenciatura'},
      {label:'Licenciatura en Investigación Judicial'}
  ];
  }

}
