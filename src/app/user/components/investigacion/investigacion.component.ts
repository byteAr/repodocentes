import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { SeoService } from '../../../shared/services/seo.service';

@Component({
    selector: 'app-investigacion',
    templateUrl: './investigacion.component.html',
    styleUrls: ['./investigacion.component.css'],
    standalone: false
})
export class InvestigacionComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.set({
      title: 'Investigación',
      description: 'Investigación científica del IUGNA: Revista Ciencia y Seguridad, repositorio digital y proyectos de investigación.',
      keywords: 'IUGNA investigación, Revista Ciencia y Seguridad, repositorio digital',
      path: '/investigacion'
    });
    this.items = [
      {label:'Inicio', routerLink: '/'},
      {label:'Investigación', disabled: true}
  ];
  }

}



