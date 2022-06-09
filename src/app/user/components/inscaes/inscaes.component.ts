import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-inscaes',
  templateUrl: './inscaes.component.html',
  styleUrls: ['./inscaes.component.css']
})
export class InscaesComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio', routerLink:'/'},
      {label:'Unidades Académicas', routerLink:'/uuaa'},
      {label:'Instituto de Capacitación Especializada', disabled: true}
  ];
  }

}
