import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-escusuper-oferta',
  templateUrl: './escusuper-oferta.component.html',
  styleUrls: ['./escusuper-oferta.component.css']
})
export class EscusuperOfertaComponent implements OnInit {

  options: string = '';
  selectedCategory: any = null;

  categories: any[] = [
    { name: 'Pregrado', key: 'A', route:'./pregrado' },
    { name: 'Ciclos de Licenciatura', key: 'M', route:'./ciclos' },
    { name: 'Curso de Nivelación', key: 'P', route:'./nivelacion' },
    { name: 'Diplomaturas', key: 'D', route:'./diplomaturas'},
    { name: 'Inscripciones', key: 'R', route:''},
  ];

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label:'Inicio',
        routerLink:'/'
      },
      {label:'Unidad Académica Escuela Superior',routerLink:'/uuaa/escusuper'},
      {label:'Oferta Académica', disabled: true}
  ];
    this.selectedCategory = this.categories[0];
  }

}
