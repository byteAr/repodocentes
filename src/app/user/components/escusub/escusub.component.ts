import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-escusub',
  templateUrl: './escusub.component.html',
  styleUrls: ['./escusub.component.css']
})
export class EscusubComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio', routerLink:'/'},
      {label:'Unidades Académicas', routerLink:'/uuaa'},
      {label:'Unidad Académica Escuela de Gendarmeria Suboficiales de Nacional', disabled: true}
  ];
  }

}
