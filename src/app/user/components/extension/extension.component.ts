import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { SeoService } from '../../../shared/services/seo.service';

@Component({
    selector: 'app-extension',
    templateUrl: './extension.component.html',
    styleUrls: ['./extension.component.css'],
    standalone: false
})
export class ExtensionComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.set({
      title: 'Extensión',
      description: 'Actividades de extensión universitaria del IUGNA: cursos, capacitaciones y programas de vinculación con la comunidad.',
      keywords: 'IUGNA extensión, cursos, capacitación',
      path: '/extension'
    });
    this.items = [
      {label:'Inicio', routerLink: '/'},
      {label:'Extensión Universitaria', disabled: true}
  ];
  }

}
