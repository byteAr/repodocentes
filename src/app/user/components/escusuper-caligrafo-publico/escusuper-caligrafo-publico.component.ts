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
      {label:'Inicio', routerLink: '/'},
      {label:'Unidad Académica Escuela Superior', routerLink: '/uuaa/escusuper'},
      {label:'Oferta Académica', routerLink:'/uuaa/escusuper/oferta/ciclos'},
      {label:'Calígrafo Público Nacional', disabled: true}
  ];
  }

}
