import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MenuItem, MessageService, PrimeNGConfig} from 'primeng/api';
import { AuthService } from 'src/app/admin/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from '../../services/document.service';
import { Document } from '../../interfaces/document.interface';
import { environment } from '../../../../environments/environment.prod';
import { ConfirmationService } from 'primeng/api';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-dashboard-actualizaciones',
  templateUrl: './dashboard-actualizaciones.component.html',
  styleUrls: ['./dashboard-actualizaciones.component.css']
})
export class DashboardActualizacionesComponent {
  private fileTmp:any;
  
  items: MenuItem[] = [];
  formNovedad     : FormGroup;

  get usuario() {
    return this.authService.usuario;
  }

  constructor(private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private primengConfig: PrimeNGConfig) {
      this.formNovedad = this.fb.group({        
        titulo: ['', [Validators.required]],
        lugar: ['', [Validators.required]]
      });
     }

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

  enviar() {

  }
  getFile(event: any): any {
    this.fileTmp = event.files;

    
    /* this.sendFile() */
    
  }
  /* sendFile() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    const body = new FormData();
    if(!body) {
      this.messageService.add({severity:'error', summary: 'Operación Exitosa', detail: `Error`, life: 3000});
    }
    this.fileTmp.forEach((item: any) => {
      body.append('document', item);
    }); */
    /* body.append('document', this.fileTmp.fileRaw, this.fileTmp.fileName); */
    /* body.append('id', this.id)
    this.docService.sendPost(body)
    .subscribe(resp =>  {
      if(resp.ok) {
        this.messageService.add({severity:'success', summary: 'Operación Exitosa', detail: `${resp.message}`, life: 3000});
        this.getDocuments()
      }
    })
  } */

}
