import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { SeoService } from '../../../shared/services/seo.service';

@Component({
    selector: 'app-uudd',
    templateUrl: './uudd.component.html',
    styleUrls: ['./uudd.component.css'],
    standalone: false
})
export class UuddComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.set({
      title: 'Oferta Académica',
      description: 'Oferta académica del IUGNA: tecnicaturas, licenciaturas, posgrados y cursos de extensión del Instituto Universitario de Gendarmería Nacional.',
      keywords: 'IUGNA oferta académica, carreras, tecnicaturas, licenciaturas, posgrado',
      path: '/uuaa'
    });
    this.items = [
      {label:'Inicio', routerLink: '/'},
      {label:'Oferta Académica', disabled: true},
      {label:'Unidades Académicas', disabled: true}
    ];
  }

}
