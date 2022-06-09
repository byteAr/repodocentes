import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-escugen-oferta',
  templateUrl: './escugen-oferta.component.html',
  styleUrls: ['./escugen-oferta.component.css']
})
export class EscugenOfertaComponent implements OnInit {

  options: string = '';
  selectedCategory: any = null;

  categories: any[] = [
    { name: 'Grado', key: 'A', route:'./grado' },
    { name: 'Área Técnico profesional', key: 'M', route:'./area' },
    { name: 'Régimen de Cursada', key: 'P', route:'./regimen' }
  ];

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label:'Inicio',
        routerLink:'/'
      },
      {label:'Unidad Académica Escuela de Gendarmeria Nacional',routerLink:'/uuaa/escugen'},
      {label:'Oferta Académica', disabled: true}
  ];
    this.selectedCategory = this.categories[0];
  }
  

}
