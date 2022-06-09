import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-insbarreal',
  templateUrl: './insbarreal.component.html',
  styleUrls: ['./insbarreal.component.css']
})
export class InsbarrealComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio', routerLink:'/'},
      {label:'Unidades Académicas', routerLink:'/uuaa'},
      {label:'Instituto de Formación de Gendarmes', disabled: true}
  ];
  }

}
