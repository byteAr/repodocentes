import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { SeoService } from '../../../shared/services/seo.service';

@Component({
    selector: 'app-escusuper',
    templateUrl: './escusuper.component.html',
    styleUrls: ['./escusuper.component.css'],
    standalone: false
})
export class EscusuperComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.set({
      title: 'Escuela Superior',
      description: 'Escuela Superior del IUGNA: licenciaturas, ciclos de complementación curricular, posgrados y cursos de extensión para oficiales de Gendarmería.',
      keywords: 'IUGNA Escuela Superior, licenciaturas, posgrado, extensión, oficiales',
      path: '/uuaa/escusuper'
    });
    this.items = [
      {label:'Inicio', routerLink: '/'},
      {label:'Unidades Académicas', routerLink: '/uuaa'},
      {label:'Unidad Académica Escuela Superior', disabled: true}
    ];
  }

}
