import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novedad-rapida-extension',
  templateUrl: './novedad-rapida-extension.component.html',
  styleUrls: ['./novedad-rapida-extension.component.css']
})
export class NovedadRapidaExtensionComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio', routerLink:'/'},
      {label:'Novedades', disabled: true}
  ];
  }

}
