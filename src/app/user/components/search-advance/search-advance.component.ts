import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-search-advance',
  templateUrl: './search-advance.component.html',
  styleUrls: ['./search-advance.component.css']
})
export class SearchAdvanceComponent implements OnInit {

  items: MenuItem[] = [];
  date3?: Date
  nodes: any[]=[
    {
      label:"Gobierno y Gestión"
    },
    {
      label:"Función y Docencia"
    },
    {
      label:"Posgrado e Investigación"
    },
    {
      label:"Extensión Universitaria"
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio', routerLink:'/'},
      {label:'Institucional', routerLink: '/institucional'},
      {label:'Digesto', routerLink: '/digesto'},
      {label:'Busqueda Avanzada', disabled: true}
  ];
  }

}
