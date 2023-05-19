import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem, MessageService, PrimeNGConfig} from 'primeng/api';
import { AuthService } from 'src/app/admin/services/auth.service';

@Component({
  selector: 'app-header-digesto',
  templateUrl: './header-digesto.component.html',
  styleUrls: ['./header-digesto.component.css'],
  providers: [MessageService]
})
export class HeaderDigestoComponent implements OnInit {

  items: MenuItem[] = [];

  get usuario() {
    return this.authService.usuario;
  }

  constructor(private authService: AuthService,
    private router: Router,
    private primengConfig: PrimeNGConfig) { }

    ngOnInit(): void {
      this.primengConfig.ripple = true;


      this.items = [{
          label: ``,
          items: [
          {
            label: 'Cerrar Sesión',
            icon: 'pi pi-sign-out',
            command: () => {
                this.logout();
            }
          }
          ]}
      ];
    }

    logout() {
      this.authService.logout()
     }

}
