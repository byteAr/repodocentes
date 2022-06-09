import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { PrimeNGConfig } from 'primeng/api';

import { faUserLarge } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('asMenu') menu!: Menubar;
  @ViewChild('itemsMenu') itemsMenu!: ElementRef;
  mostrar: boolean = false;
  visibleSidebar1: boolean = false;

  

  menuHeader: MenuItem[] = [];
  
  items: MenuItem[] = [];
  faUserLarge = faUserLarge

  constructor( private primengConfig: PrimeNGConfig,
               private render2 : Renderer2) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.menuHeader = [{
        label: ``,
        items: [
        {
            label: 'Perfil',
            icon: 'pi pi-user',
            routerLink : '/'
        },
        {
            label: 'Ayuda',
            icon: 'pi pi-info-circle'
        },
        {
          label: 'Cerrar Sesión',
          icon: 'pi pi-sign-out',
          
        }
        ]}
    ];

    this.items = [
      {
          label: 'INSTITUCIONAL',
          items: [
              {label: 'El instituto Universitario'},
              {label: 'Quiénes Somos'},
              {label: 'Misión'},
              {label: 'Autoridades'},
              {label: 'Sedes y localizaciones'},
              {label: 'Convocatoria a Docentes Interinos'}
          ],
          styleClass: 'menucus'
      },
      {
          label: 'INVESTIGACIÓN',
          items: [
              {label: 'Revista Ciencia y Seguridad'},
              {label: 'Repositorio Digital'}
          ]
      },
      {
          label: 'EXTENSIÓN',
          
      },
      {
          label: 'BIBLIOTECA',
         
      },
      {
          label: 'OFERTA ACADÉMICA',
          items: [
              {label: 'Tecnicaturas'},
              {label: 'Licenciaturas'},
              {label: 'Ciclos de Licenciatura'},
              {label: 'Cursos de Extensión'},
              {label: 'Diplomaturas'}
          ]
      },
      {
          label: 'Mi IUGNA'
      }
  ];
  }

  mostrarMenu() {
      if(this.mostrar == false) {
          this.mostrar = true
      } else {
          this.mostrar = false
      }
    /* const menu = this.itemsMenu.nativeElement
    this.render2.addClass(menu, "mostrar") */
  }

  

}
