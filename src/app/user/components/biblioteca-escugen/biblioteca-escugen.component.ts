import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-biblioteca-escugen',
  templateUrl: './biblioteca-escugen.component.html',
  styleUrls: ['./biblioteca-escugen.component.css']
})
export class BibliotecaEscugenComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio', routerLink:'/'},
      {label:'Unidad Académica Escuela de Gendarmeria Nacional', routerLink:'/uuaa/escugen'},
      {label:'Biblioteca', disabled: true}
  ];
  }

}
