import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
    selector: 'app-uudd',
    templateUrl: './uudd.component.html',
    styleUrls: ['./uudd.component.css'],
    standalone: false
})
export class UuddComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio', routerLink: '/'},
      {label:'Oferta Académica', disabled: true},
      {label:'Unidades Acdémicas', disabled: true}
  ];
  }

}
