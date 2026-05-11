import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { SeoService } from '../../../shared/services/seo.service';

@Component({
    selector: 'app-biblioteca',
    templateUrl: './biblioteca.component.html',
    styleUrls: ['./biblioteca.component.css'],
    standalone: false
})
export class BibliotecaComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.set({
      title: 'Biblioteca',
      description: 'Biblioteca del IUGNA: acceso a recursos bibliográficos, bases de datos y material académico del Instituto Universitario de Gendarmería Nacional.',
      keywords: 'IUGNA biblioteca, bibliografía, recursos académicos',
      path: '/investigacion/biblioteca'
    });
    this.items = [
      {label:'Inicio'},
      {label:'Investigación'},
      {label:'Biblioteca'},
  ];
  }

}
