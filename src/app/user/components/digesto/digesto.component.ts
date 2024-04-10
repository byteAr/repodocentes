import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { City, Digesto } from '../../interfaces/interfaces.interface';


@Component({
  selector: 'app-digesto',
  templateUrl: './digesto.component.html',
  styleUrls: ['./digesto.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class DigestoComponent implements OnInit {



  items: MenuItem[] = [];
  cities: City[]=[];
  selectedCity?: City;
  productDialog: boolean = false;
  types:Array<object>=[]
  digesto: Digesto[] = [
    {
      title:'Normativa 1',
      date: '11 de Diciembre de 2012',
      affair: '',
      type: 'Normativa Gobierno y Gestión',
      description: 'Descripción general de la normativa',
      urlDocument: ''
    },
    {
      title:'Norma 2',
      date: '11 de Diciembre de 2012',
      affair: '',
      type: 'Normativa Función y Docencia',
      description: 'Descripción general de la normativa',
      urlDocument: ''
    },
    {
      title:'Norma 3',
      date: '11 de Diciembre de 2012',
      affair: '',
      type: 'Normativa Posgrado e Investigación',
      description: 'Descripción general de la normativa',
      urlDocument: ''
    },
    {
      title:'Normativa 4',
      date: '11 de Diciembre de 2012',
      affair: '',
      type: 'Normativa Extensión Universitaria',
      description: 'Descripción general de la normativa',
      urlDocument: ''
    },
  ]
  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService,) {
    this.cities = [
      {name: 'Gobierno y Gestión', code: 'NY'},
      {name: 'Función y Docencia', code: 'RM'},
      {name: 'Posgrado e Investigación', code: 'LDN'},
      {name: 'Extensión Universitaria', code: 'IST'}
    ];
    this.types = [
      {label: 'Gobierno y Gestión', value: 'Gobierno y Gestión'},
      {label: 'Función y Docencia', value: 'Función y Docencia'},
      {label: 'Posgrado e Investigación', value: 'Posgrado e Investigación'},
      {label: 'Extensión Universitaria', value: 'Extensión Universitaria'}
    ]
   }

  ngOnInit(): void {
    this.items = [
      {label:'Inicio', routerLink:'/'},
      {label:'Instituto Uiversitario', routerLink: '/institucional'},
      {label:'Digesto', disabled: true}
  ];
  }

  hideDialog() {
    this.productDialog = false;
  }

  openNew() {
    this.productDialog = true;
  }

}
