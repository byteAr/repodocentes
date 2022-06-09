import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-escusuper-caligrafo-publico',
  templateUrl: './escusuper-caligrafo-publico.component.html',
  styleUrls: ['./escusuper-caligrafo-publico.component.css']
})
export class EscusuperCaligrafoPublicoComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio'},
      {label:'Unidad Académica Escuela Superior'},
      {label:'Oferta Académica'},
      {label:'Pregrado'},
      {label:'Calígrafo Público Nacional'}
  ];
  }

}
