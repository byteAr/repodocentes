import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { SeoService } from '../../../shared/services/seo.service';

@Component({
    selector: 'app-escusub',
    templateUrl: './escusub.component.html',
    styleUrls: ['./escusub.component.css'],
    standalone: false
})
export class EscusubComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.set({
      title: 'Escuela de Suboficiales',
      description: 'Escuela de Suboficiales del IUGNA: tecnicaturas universitarias en seguridad pública, administración, criminalística e investigación criminal.',
      keywords: 'IUGNA Escuela Suboficiales, tecnicaturas, seguridad pública, criminalística',
      path: '/uuaa/escusub'
    });
    this.items = [
      {label:'Inicio', routerLink:'/'},
      {label:'Unidades Académicas', routerLink:'/uuaa'},
      {label:'Unidad Académica Escuela de Suboficiales', disabled: true}
    ];
  }

}
