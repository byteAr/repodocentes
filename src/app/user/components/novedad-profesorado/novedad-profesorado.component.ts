import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-novedad-profesorado',
  templateUrl: './novedad-profesorado.component.html',
  styleUrls: ['./novedad-profesorado.component.css']
})
export class NovedadProfesoradoComponent implements OnInit {
   items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio', routerLink:'/'},
      {label:'Novedades', disabled: true}
  ];
  }

}
