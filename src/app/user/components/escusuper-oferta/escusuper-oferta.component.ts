import { Component, OnInit } from '@angular/core';

import { DropdownOption } from '../../../shared/components/dropdown/dropdown.component';

import {MenuItem} from 'primeng/api';

import { AccordionItem } from '../../../shared/components/accordion/accordion.component';

@Component({
  selector: 'app-escusuper-oferta',
  templateUrl: './escusuper-oferta.component.html',
  styleUrls: ['./escusuper-oferta.component.css']
})
export class EscusuperOfertaComponent implements OnInit {

  multi = true; // cambia a true para permitir múltiples abiertos
  sections = [
    {
      title: 'Buenos Aires',
      actions: [
        { label: 'Licenciaturas', link: './ciclos' },
        { label: 'Tecnicaturas', link: [''] },
        { label: 'Diplomaturas', link: ['./diplomaturas'] },
        { label: 'Extensión', link: ['/uuaa/escusuper/extension'] }
      ]
    },
    {
      title: 'Córdoba',
      actions: [
        { label: 'Tecnicaturas', link: './tecnicaturas-escusub' }
      ]
    },
    {
      title: 'San Juan',
      actions: [
        { label: 'Tecnicaturas', link: '' }
      ]
    },
    /* { title: 'Configuración', disabled: true } */
  ];

  itemsDropdown: DropdownOption[] = [
    { label: 'Editar', value: 'edit' },
    { label: 'Duplicar', value: 'dup' },
    { label: 'Eliminar', value: 'del', disabled: true },
  ];

  onPick(opt: DropdownOption) {
    console.log('Seleccionado:', opt);
  }

  options: string = '';
  selectedCategory: any = null;

  categories: any[] = [
    { name: 'Pregrado', key: 'A', route:'./pregrado' },
    { name: 'Ciclos de Licenciatura', key: 'M', route:'./ciclos' },
    { name: 'Curso de Nivelación', key: 'P', route:'./nivelacion' },
    { name: 'Diplomaturas', key: 'D', route:'./diplomaturas'},
    { name: 'Inscripciones', key: 'R', route:''},
  ];

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label:'Inicio',
        routerLink:'/'
      },
      {label:'Unidad Académica Escuela Superior',routerLink:'/uuaa/escusuper'},
      {label:'Oferta Académica', disabled: true}
  ];
    this.selectedCategory = this.categories[0];
  }

}
