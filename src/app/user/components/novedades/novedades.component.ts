import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';
import { Novedad } from '../../interfaces/interfaces.interface';
import { NovedadesService } from '../../services/novedades.service';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { SeoService } from '../../../shared/services/seo.service';

@Component({
    selector: 'app-novedades',
    templateUrl: './novedades.component.html',
    styleUrls: ['./novedades.component.css'],
    standalone: false
})
export class NovedadesComponent implements OnInit {

  items: MenuItem[] = [];
  novedades:Novedad[] = [];
  p:number=1;
  url: string = environment.baseUrl;
  description: any = ''



  constructor( private novedadesSerice: NovedadesService,
              private sanitizer: DomSanitizer,
              private seo: SeoService ) { }

  ngOnInit(): void {
    this.seo.set({
      title: 'Novedades',
      description: 'Novedades y noticias del IUGNA: eventos, inscripciones, convocatorias y actividades del Instituto Universitario de Gendarmería Nacional.',
      keywords: 'IUGNA novedades, noticias, eventos, inscripciones, convocatorias',
      path: '/novedades'
    });
    this.items = [
      {label:'Inicio', routerLink: '/'},
      {label:'Novedades', disabled: true}
    ];

    /* this.novedadesSerice.traerTodasLasNovedades().subscribe( resp => {
      this.novedades = resp.rows.reverse()
    }); */





}


}
