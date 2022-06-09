import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-escugen',
  templateUrl: './escugen.component.html',
  styleUrls: ['./escugen.component.css']
})
export class EscugenComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio', routerLink:'/'},
      {label:'Unidades Académicas', routerLink:'/uuaa'},
      {label:'Unidad Académica Escuela de Gendarmeria Nacional', disabled: true}
  ];
  }

}
