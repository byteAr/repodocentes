import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-escusub-oferta',
  templateUrl: './escusub-oferta.component.html',
  styleUrls: ['./escusub-oferta.component.css']
})
export class EscusubOfertaComponent implements OnInit {

  options: string = '';
  selectedCategory: any = null;

  categories: any[] = [
    { name: 'Tecnicaturas', key: 'A', route:'./tecnicaturas' }
  ];

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label:'Inicio',
        routerLink:'/'
      },
      {label:'Unidad Académica Escuela de Suboficiales de Gendarmeria Nacional',routerLink:'/uuaa/escusub'},
      {label:'Oferta Académica', disabled: true}
  ];
    this.selectedCategory = this.categories[0];  
  }

}
