import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-escusuper-profesorado',
  templateUrl: './escusuper-profesorado.component.html',
  styleUrls: ['./escusuper-profesorado.component.css']
})
export class EscusuperProfesoradoComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio'},
      {label:'Unidad Académica Escuela Superior'},
      {label:'Oferta Académica'},
      {label:'Ciclos de Licenciatura'},
      {label:'Profesorado Universitario'}
  ];
  }

}
