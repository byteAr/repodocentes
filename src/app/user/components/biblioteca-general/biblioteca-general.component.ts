import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-biblioteca-general',
  templateUrl: './biblioteca-general.component.html',
  styleUrls: ['./biblioteca-general.component.css']
})
export class BibliotecaGeneralComponent implements OnInit {
  items: MenuItem[] = [];
  display: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio', routerLink:'/'},
      {label:'Biblioteca', routerLink:'/biblioteca'},
      {label:'Sistema de Bibliotecas del IUGNA', disabled: true}
  ];
  }

  showDisplay() {
    this.display = true
  }

}
