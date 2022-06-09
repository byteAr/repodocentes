import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-ciclos-criminalistica',
  templateUrl: './ciclos-criminalistica.component.html',
  styleUrls: ['./ciclos-criminalistica.component.css']
})
export class CiclosCriminalisticaComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio'},
      {label:'Unidad Académica Escuela Superior'},
      {label:'Oferta Académica'},
      {label:'Ciclos de Licenciatura'},
      {label:'Licenciatura en Criminalística'}
  ];
  }

}
