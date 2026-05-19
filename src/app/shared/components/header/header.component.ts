import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isSubmenuOpen = false;
  isSubmenu2Open = false;
  isSubmenu3Open = false;

  mostrar: boolean = false;
  visibleSidebar1: boolean = false;

  menuHeader: MenuItem[] = [];
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'INSTITUCIONAL',
        items: [
          { label: 'El instituto Universitario' },
          { label: 'Quiénes Somos' },
          { label: 'Misión' },
          { label: 'Autoridades' },
          { label: 'Sedes y localizaciones' },
          { label: 'Convocatoria a Docentes Interinos' }
        ]
      },
      {
        label: 'INVESTIGACIÓN',
        items: [
          { label: 'Revista Ciencia y Seguridad' },
          { label: 'Repositorio Digital' }
        ]
      },
      { label: 'EXTENSIÓN' },
      { label: 'BIBLIOTECA' },
      {
        label: 'OFERTA ACADÉMICA',
        items: [
          { label: 'Tecnicaturas' },
          { label: 'Licenciaturas' },
          { label: 'Ciclos de Licenciatura' },
          { label: 'Cursos de Extensión' },
          { label: 'Diplomaturas' }
        ]
      }
    ];
  }

  mostrarMenu() {
    this.mostrar = !this.mostrar;
  }

  toggleSubmenu() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }

  toggleSubmenu2() {
    this.isSubmenu2Open = !this.isSubmenu2Open;
  }

  toggleSubmenu3() {
    this.isSubmenu3Open = !this.isSubmenu3Open;
  }
}
