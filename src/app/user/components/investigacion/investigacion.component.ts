import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { SeoService } from '../../../shared/services/seo.service';

@Component({
  selector: 'app-investigacion',
  standalone: false,
  templateUrl: './investigacion.component.html',
  styleUrls: ['./investigacion.component.css']
})
export class InvestigacionComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.set({
      title: 'Investigación',
      description: 'Área de investigación del IUGNA: proyectos, publicaciones y producción académica del Instituto Universitario de Gendarmería Nacional.',
      keywords: 'IUGNA investigación, proyectos académicos, publicaciones, producción científica',
      path: '/investigacion'
    });
    this.items = [
      {label:'Inicio', routerLink: '/'},
      {label:'Investigación', disabled: true}
    ];
  }

}



