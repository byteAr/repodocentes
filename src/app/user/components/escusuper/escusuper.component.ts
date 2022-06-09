import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-escusuper',
  templateUrl: './escusuper.component.html',
  styleUrls: ['./escusuper.component.css']
})
export class EscusuperComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio', routerLink: '/'},
      {label:'Unidades Académicas', routerLink: '/uuaa'},
      {label:'Unidad Académica Escuela Superior', disabled: true}
  ];
  }

}
