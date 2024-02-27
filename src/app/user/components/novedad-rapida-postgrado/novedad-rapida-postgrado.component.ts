import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-novedad-rapida-postgrado',
  templateUrl: './novedad-rapida-postgrado.component.html',
  styleUrls: ['./novedad-rapida-postgrado.component.css']
})
export class NovedadRapidaPostgradoComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio', routerLink:'/'},
      {label:'Novedades', disabled: true}
  ];
  }

}
