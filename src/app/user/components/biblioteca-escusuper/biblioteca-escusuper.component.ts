import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
    selector: 'app-biblioteca-escusuper',
    templateUrl: './biblioteca-escusuper.component.html',
    styleUrls: ['./biblioteca-escusuper.component.css'],
    standalone: false
})
export class BibliotecaEscusuperComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio', routerLink:'/'},
      {label:'Unidad Académica Escuela Superior', routerLink: '/uuaa/escusuper'},
      {label:'Biblioteca', disabled: true}
  ];
  }

}
