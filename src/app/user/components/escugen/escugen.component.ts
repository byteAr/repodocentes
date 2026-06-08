import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { SeoService } from '../../../shared/services/seo.service';

@Component({
    selector: 'app-escugen',
    templateUrl: './escugen.component.html',
    styleUrls: ['./escugen.component.css'],
    standalone: false
})
export class EscugenComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.set({
      title: 'Escuela de Gendarmería Nacional',
      description: 'Escuela de Gendarmería Nacional del IUGNA: formación de oficiales con carreras de grado y área técnico-profesional.',
      keywords: 'IUGNA Escuela Gendarmería, formación oficiales, carreras de grado',
      path: '/uuaa/escugen'
    });
    this.items = [
      {label:'Inicio', routerLink:'/'},
      {label:'Unidades Académicas', routerLink:'/uuaa'},
      {label:'Unidad Académica Escuela de Gendarmeria Nacional', disabled: true}
    ];
  }

}
