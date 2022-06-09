import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-convocatoria',
  templateUrl: './convocatoria.component.html',
  styleUrls: ['./convocatoria.component.css']
})
export class ConvocatoriaComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio'},
      {label:'Convocatoria a Docentes'}
  ];
  }

}
