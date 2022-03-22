import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem, MessageService, PrimeNGConfig} from 'primeng/api';
import { AuthService } from 'src/app/admin/services/auth.service';

@Component({
  selector: 'app-header-repo',
  templateUrl: './header-repo.component.html',
  styleUrls: ['./header-repo.component.css'],
  providers: [MessageService]
})
export class HeaderRepoComponent implements OnInit {


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
