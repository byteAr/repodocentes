import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-cursos-extension',
  templateUrl: './cursos-extension.component.html',
  styleUrls: ['./cursos-extension.component.css']
})
export class CursosExtensionComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {    
    this.items = [
      {label:'Inicio', routerLink: '/'},
      {label:'Unidad Académica Escuela Superior', routerLink: '/uuaa/escusuper'},
      {label:'Cursos de Extensión', disabled: true}
  ];
  }

}
