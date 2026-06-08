import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { SeoService } from '../../../shared/services/seo.service';

@Component({
  selector: 'app-extension',
  standalone: false,
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.css']
})
export class ExtensionComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.set({
      title: 'Extensión Universitaria',
      description: 'Cursos de extensión universitaria del IUGNA: idiomas, mediación, negociación y formación continua abierta a la comunidad.',
      keywords: 'IUGNA extensión, cursos, idiomas, formación continua, extensión universitaria',
      path: '/extension'
    });
    this.items = [
      {label:'Inicio', routerLink: '/'},
      {label:'Extensión Universitaria', disabled: true}
    ];
  }

}
