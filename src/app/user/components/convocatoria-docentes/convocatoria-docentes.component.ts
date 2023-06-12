import { Component, OnInit } from '@angular/core';


import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';



@Component({
  selector: 'app-convocatoria-docentes',
  templateUrl: './convocatoria-docentes.component.html',
  styleUrls: ['./convocatoria-docentes.component.css']
})
export class ConvocatoriaDocentesComponent implements OnInit {

  items: MenuItem[] = [];


  constructor() { }


  ngOnInit(): void {
    this.items = [
      {label:'Inicio', routerLink:'/'},
      {label:'Convocatoria a Docentes', disabled: true}
  ];
  }

}
