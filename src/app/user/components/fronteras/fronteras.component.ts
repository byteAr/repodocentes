import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-fronteras',
  templateUrl: './fronteras.component.html',
  styleUrls: ['./fronteras.component.css']
})
export class FronterasComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio', routerLink: '/'},
      {label:'Unidad Académica Escuela Superior', routerLink: '/uuaa/escusuper'},
      {label:'Oferta Académica', routerLink: '/uuaa/escusuper/oferta/diplomaturas'},
      {label:'Diplomatura en Fronteras', disabled: true}
  ];
  }

}
