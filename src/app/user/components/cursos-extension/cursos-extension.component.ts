import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-cursos-extension',
  templateUrl: './cursos-extension.component.html',
  styleUrls: ['./cursos-extension.component.css']
})
export class CursosExtensionComponent implements OnInit {

  items: MenuItem[] = [];

  novedadesSlides = [
    { imagen: 'assets/img/novedades/index/novedadMiniatura03.png', descripcion: 'Curso de Inglés Nivel I — Modalidad Híbrida' },
    { imagen: 'assets/img/novedades/index/novedadMiniatura04.png', descripcion: 'Taller de Prevención del Delito' },
    { imagen: 'assets/img/novedades/index/novedadMiniatura05.png', descripcion: 'Curso de Francés Nivel I — Modalidad Presencial' },
    { imagen: 'assets/img/novedades/index/novedadMiniatura06.png', descripcion: 'Introducción a la Gestión Organizacional' },
    { imagen: 'assets/img/novedades/index/novedadMiniatura07.png', descripcion: 'Curso de Inglés Nivel III — Modalidad Híbrida' },
    { imagen: 'assets/img/novedades/index/novedadMiniatura08.png', descripcion: 'Inglés Conversación — Segundo Cuatrimestre' },
    { imagen: 'assets/img/novedades/index/novedadMiniatura09.png', descripcion: 'Taller de Mediación y Negociación' },
    { imagen: 'assets/img/novedades/index/novedadMiniatura10.png', descripcion: 'Prevención y Protección contra la Violencia de Género' },
    { imagen: 'assets/img/novedades/index/novedadMiniatura11.png', descripcion: 'Curso de Francés Conversación' },
    { imagen: 'assets/img/novedades/index/novedadMiniatura12.png', descripcion: 'Análisis del Delito — Modalidad Virtual' },
    { imagen: 'assets/img/novedades/index/novedadMiniatura13.png', descripcion: 'Apertura de inscripciones — Primer Cuatrimestre' },
    { imagen: 'assets/img/novedades/index/novedadMiniatura14.png', descripcion: 'Ciclo de Conferencias de Extensión Universitaria' },
    { imagen: 'assets/img/novedades/index/novedadMiniatura15.png', descripcion: 'Francés Nivel III — Modalidad Presencial' },
    { imagen: 'assets/img/novedades/index/novedadMiniatura16.png', descripcion: 'Curso de Inglés Nivel II — Segundo Cuatrimestre' },
    { imagen: 'assets/img/novedades/index/novedadMiniatura17.png', descripcion: 'Jornada de Divulgación Científica' },
    { imagen: 'assets/img/novedades/index/novedadMiniatura18.jpeg', descripcion: 'Actividades de Extensión — Sede Paseo Colón' },
    { imagen: 'assets/img/novedades/index/novedadMiniatura19.png', descripcion: 'Talleres de Educación Permanente para la Comunidad' },
    { imagen: 'assets/img/novedades/index/novedadMiniatura20.png', descripcion: 'Cierre de Cursada — Extensión Universitaria 2024' },
  ];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio', routerLink: '/'},
      {label:'Unidad Académica Escuela Superior', routerLink: '/uuaa/escusuper'},
      {label:'Cursos de Extensión', disabled: true}
  ];
  }

}
