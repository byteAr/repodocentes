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
      {label:'Inicio' ,routerLink: '/'},
      {label:'Unidad Académica Escuela Superior', routerLink:'/uuaa/escusuper'},
      {label:'Oferta Académica', routerLink:'/uuaa/escusuper/oferta/ciclos'},
      {label:'Licenciatura en Investigación Judicial', disabled: true}
  ];
  }

}
