import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';
import { Novedad } from '../../interfaces/interfaces.interface';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit {

  items: MenuItem[] = [];
  novedades:Novedad[] = [];
  p: number = 1;


  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio', routerLink: '/'},
      {label:'Novedades', disabled: true}
    ];
    this.novedades = [
      {
        id: 0,
        title: 'Educación Superior',
        rutaImage: '../../../../assets/img/novedades/index/novedadMiniatura19.png',
        date: '26 de Mayo de 2022',
        description: 'Se encuentran abiertas las inscripciones para los Cursos de Posgrado',
        location: 'IUGNA: Escuela Superior',
        route: './novedad1'
      },
      {
        id: 1,
        title: 'Educación Superior',
        rutaImage: '../../../../assets/img/novedades/index/novedadMiniatura18.jpeg',
        date: '26 de Abril de 2022',
        description: 'Primera Reunión Ordinaria del Consejo Académico 2022 del IUGNA',
        location: 'CABA',
        route: './novedad2'
      },
      {
        id: 2,
        title: 'Educación Superior',
        rutaImage: '../../../../assets/img/novedades/index/novedadMiniatura17.png',
        date: '28 de Marzo de 2022',
        description: 'Inscripciones abiertas para los Cursos de Extensión Universitaria',
        location: 'IUGNA: Escuela Superior',
        route: './novedad3'
      },
      {
        id: 3,
        title: 'Educación Superior',
        rutaImage: '../../../../assets/img/novedades/index/novedadMiniatura16.png',
        date: '28 de septiembre de 2021',
        description: 'Se otorgó validez al Sistema de Educación a Distancia del Instituto Universitario de Gendarmería Nacional',
        location: 'CABA: Educación a Distancia',
        route: './novedad4'
      },
      {
        id: 4,
        title: 'Educación Superior',        
        rutaImage: '../../../../assets/img/novedades/index/novedadMiniatura15.png',
        date: '23 de junio de 2021',
        description: 'El Instituto Universitario de Gendarmería Nacional participó en la Reunión Plenaria RUEDA',
        location: 'CABA: Educación a Distancia',
        route: './novedad5'
      },
      {
        id: 5,
        title: 'Educación Superior',
        rutaImage: '../../../../assets/img/novedades/index/novedadMiniatura14.png',
        date: '26 de mayo de 2021',
        description: 'Capacitación sobre las estrategias y recursos en la enseñanza virtual',
        location: 'CABA: CENEDIS - IUGNA',
        route: './novedad6'
      },
      {
        id: 6,
        title: 'Oferta Educativa',
        rutaImage: '../../../../assets/img/novedades/index/novedadMiniatura13.png',
        date: '30 de abril de 2021',
        description: 'Inscripciones abiertas para los Cursos de Nivelación de los Ciclos de Licenciaturas',
        location: 'Oferta Educativa: Unidad Académica Escuela Superior',
        route: './novedad7'
      },
      {
        id: 7,
        title: 'Educación Superior',
        rutaImage: '../../../../assets/img/novedades/index/novedadMiniatura12.png',
        date: '19 noviembre de 2020',
        description: 'La Gestión Educativa en Entornos Virtuales en el marco del Primer Webinar Institucional “XXVII Seminario de Fronteras y Actualización Profesional”',
        location: 'CABA',
        route: './novedad8'
      },
      {
        id: 8,
        title: 'Educación Superior',
        rutaImage: '../../../../assets/img/novedades/index/novedadMiniatura11.png',
        date: '18 noviembre de 2020',
        description: 'El Instituto Universitario de Gendarmería Nacional asistió a la reunión virtual por los 30 años de la Red Universitaria de Educación a Distancia de Argentina',
        location: 'CABA',
        route: './novedad9'
      },
      {
        id: 9,
        title: 'Educación Superior',
        rutaImage: '../../../../assets/img/novedades/index/novedadMiniatura10.png',
        date: '04 de Noviembre de 2020',
        description: 'Participación del Instituto Universitario de Gendarmeria Nacional Argentina en el Workshop de la Universidad Nacional de Mar del Plata sobre el SIED',
        location: 'Educación Superior',
        route: './novedad10'
      },
      {
        id: 10,
        title: 'Oferta Educativa',
        rutaImage: '../../../../assets/img/novedades/index/novedadMiniatura09.png',
        date: '04 de Noviembre de 2020',
        description: 'Se graduaron alumnos de los Ciclos de Licenciaturas de forma virtual en tiempos de la pandemia Covid-19',
        location: 'CABA: ESCUSUPER',
        route: './novedad11'
      },
      {
        id: 11,
        title: 'Educación Superior',
        rutaImage: '../../../../assets/img/novedades/index/novedadMiniatura08.png',
        date: '0 de Octubre de 2020',
        description: 'Se graduaron alumnos de los Ciclos de Licenciaturas de forma virtual en tiempos de la pandemia Covid-19',
        location: 'CABA: ESCUSUPER',
        route: './novedad12'
      },
      {
        id: 12,
        title: 'Educación Superior',
        rutaImage: '../../../../assets/img/novedades/index/novedadMiniatura07.png',
        date: '18 de Agosto 2020',
        description: 'Primera Reunión de la Comisión de Educación a Distancia',
        location: 'IUGNA: Oferta Educativa',
        route: './novedad13'
      },
      {
        id: 13,
        title: 'Educación Superior',
        rutaImage: '../../../../assets/img/novedades/index/novedadMiniatura06.png',
        date: '26 de Junio de 2020',
        description: 'El Instituto Universitario de Gendarmería Nacional Argentina participó en el Seminario y la Reunión Plenaria RUEDA',
        location: 'CABA',
        route: './novedad14'
      },
      {
        id: 14,
        title: 'Educación Superior',
        rutaImage: '../../../../assets/img/novedades/index/novedadMiniatura05.png',
        date: '22 de Mayo de 2020',
        description: 'La enseñanza virtual ante la pandemia del COVID-19',
        location: 'IUGNA: Unidades Educativas',
        route: './novedad15'
      },
      {
        id: 15,
        title: 'Educación Superior',
        rutaImage: '../../../../assets/img/novedades/index/novedadMiniatura04.png',
        date: '11 de Mayo de 2020',
        description: 'Primera Reunión Ordinaria del Consejo Académico del Instituto Universitario de Gendarmeria Nacional',
        location: 'IUGNA: Videoconferencia',
        route: './novedad16'
      },
      {
        id: 16,
        title: 'Educación Superior',
        rutaImage: '../../../../assets/img/novedades/index/novedadMiniatura03.png',
        date: '05 de Marzo de 2020',
        description: 'Asumieron las nuevas autoridades del Instituto Universitario de Gendarmería Nacional Argentina',
        location: 'CABA',
        route: './novedad17'
      }
    ]
  }

}
