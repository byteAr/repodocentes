import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
    selector: 'app-novedad-rapida',
    templateUrl: './novedad-rapida.component.html',
    styleUrls: ['./novedad-rapida.component.css'],
    standalone: false
})
export class NovedadRapidaComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio', routerLink:'/'},
      {label:'Novedades', disabled: true}
  ];
  }

}
