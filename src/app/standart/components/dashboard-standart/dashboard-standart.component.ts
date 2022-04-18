import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

import * as moment from 'moment';
import { Router } from '@angular/router';
import { docente } from '../../../admin/interfaces/docente.interface';
import { UsersService } from '../../../admin/services/users.service';
moment.locale('es');

@Component({
  selector: 'app-dashboard-standart',
  templateUrl: './dashboard-standart.component.html',
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
})
export class DashboardStandartComponent implements OnInit {
  productDialog?: boolean;

  docentes: any[] = [];

  eventos: any[] = [];

  docente!: docente;

  
  

  statuses:Array<Object>=[];
  

  constructor(private messageService: MessageService, 
              private confirmationService: ConfirmationService,
              private userService: UsersService,
              private router: Router) { }

  ngOnInit() {
    this.userService.getUser()
      .subscribe(resp => {
        this.docentes = resp
      });

  }

    

    findIndexById(id: string): number {
      let index = -1;
      for (let i = 0; i < this.docentes.length; i++) {
          if (this.docentes[i].id === id) {
              index = i;
              break;
          }
    }

      return index;
    }

    

  createId(): string {
      let id = '';
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for ( var i = 0; i < 5; i++ ) {
          id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
  }

  
}
