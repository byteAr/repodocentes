import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-investigacion',
  templateUrl: './investigacion.component.html',
  styleUrls: ['./investigacion.component.css']
})
export class InvestigacionComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio', routerLink: '/'},
      {label:'Investigación', disabled: true}
  ];
  }

}



