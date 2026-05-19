import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-ofertaacademica',
  standalone: false,
  templateUrl: './ofertaacademica.component.html',
  styleUrls: ['./ofertaacademica.component.css']
})
export class OfertaacademicaComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio', routerLink: '/'},
      {label:'Unidades Académicas', disabled: true}
    ];
  }

}
