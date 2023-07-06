import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novedad-rapida-seguridad-distancia',
  templateUrl: './novedad-rapida-seguridad-distancia.component.html',
  styleUrls: ['./novedad-rapida-seguridad-distancia.component.css']
})
export class NovedadRapidaSeguridadDistanciaComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio', routerLink:'/'},
      {label:'Novedades', disabled: true}
  ];
  }

}
