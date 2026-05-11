import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
    selector: 'app-iugna-cin',
    templateUrl: './iugna-cin.component.html',
    styleUrls: ['./iugna-cin.component.css'],
    standalone: false
})
export class IugnaCinComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio'},
      {label:'Investigación'},
      {label:'IUGNA-CIN'},
  ];
  }

}
