import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
    selector: 'app-biblioteca-escusub',
    templateUrl: './biblioteca-escusub.component.html',
    styleUrls: ['./biblioteca-escusub.component.css'],
    standalone: false
})
export class BibliotecaEscusubComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    
    this.items = [
      {label:'Inicio'},
      {label:'Unidad Académica Escuela de Suboficiales de Gendarmeria Nacional', routerLink: '/uuaa/escusub'},
      {label:'Biblioteca', disabled: true}
  ];
  }

}
