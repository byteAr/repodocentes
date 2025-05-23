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
      {label:'Inicio', routerLink:'/'},
      {label:'Unidad Académica Escuela Superior', routerLink: '/uuaa/escusuper'},
      {label:'Oferta Académica', routerLink:'/uuaa/escusuper/oferta/ciclos'},
      {label:'Licenciatura en Criminalística', disabled: true}
  ];
  }

}
