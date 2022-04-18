import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

import * as moment from 'moment'
import { docente } from '../../interfaces/docente.interface';
import { UsersService } from '../../services/users.service'
moment.locale('es');

@Component({
  selector: 'app-list-docentes',
  templateUrl: './list-docentes.component.html',
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
})
export class ListDocentesComponent implements OnInit {

  productDialog?: boolean;

  docentes: any[] = [];

  usuarios: any[] = [];

  eventos: any[] = [];

  docente!: docente;

  desde?: Date;

  hasta?: Date;

  buttonSearchDisabled: boolean = true;

  selectedProducts: docente[]=[];

  tablaUsuarios : boolean = false;

  submitted?: boolean;
  productDialog1?: boolean;
  productDialog2?: boolean;
  
  

  statuses:Array<Object>=[];
  

  constructor(private messageService: MessageService, 
              private confirmationService: ConfirmationService,
              private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUser()
      .subscribe(resp => {
        this.docentes = resp
      });
    this.userService.getUsuarios()
      .subscribe(resp => {
      this.usuarios = resp
    })
    

    this.statuses = [
        {label: 'ESCUGEN', value: 'ESCUGEN'},
        {label: 'ESCUSUB', value: 'ESCUSUB'},
        {label: 'ESCUSUPER', value: 'ESCUSUPER'},
        {label: 'INSCAES', value: 'INSCAES'},
        {label: 'INSBARREALL', value: 'INSBARREAL'}
    ];
  }

    openNew() {
      this.docente = {};
      this.submitted = false;
      this.productDialog = true;
    }
    openNew2() {
      this.docente = {};
      this.submitted = false;
      this.productDialog1 = true;
    }
    openNew3() {
      this.docente = {};
      this.submitted = false;
      this.productDialog2 = true;
    }
    deleteSelectedProducts() {
      this.confirmationService.confirm({
          message: 'Está seguro de eliminare a este docente del sistema?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.docentes = this.docentes.filter(val => !this.selectedProducts.includes(val));
              //this.selectedProducts = null;
              this.messageService.add({severity:'success', summary: 'Operación Exitosa', detail: 'Personal Eliminado', life: 3000});
          }
      });
    }

    editProduct(docente: docente) {
        this.docente = {...docente};
        this.productDialog = true;
    }

    deleteDocente(docente: docente) {
        this.confirmationService.confirm({
            message: `Está seguro/a de eliminar a  ${docente.nombre} ${docente.apellido} ?`,
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.docentes = this.docentes.filter(val => val.id !== docente.id);
                this.userService.deleteDocente(docente.id)
                    .subscribe(resp => {
                        if(resp.ok) {
                            this.messageService.add({severity:'success', summary: 'Operación Exitosa', detail: 'Docente Eliminado', life: 3000});
                        } else {
                            this.messageService.add({severity:'error', summary: 'Operación Fallida', detail: 'Personal no encontrado', life: 3000});
                        }
                    })
                this.docente = {};
                
                
            }
        });
    }
    deleteUsuario(usuario: docente) {
        this.confirmationService.confirm({
            message: `Está seguro/a de eliminar a  ${usuario.nombre} ${usuario.apellido} ?`,
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.docentes = this.docentes.filter(val => val.id !== usuario.id);
                this.userService.deleteUsuario(usuario.id)
                    .subscribe(resp => {
                        if(resp.ok) {
                            this.messageService.add({severity:'success', summary: 'Operación Exitosa', detail: 'Personal Eliminado', life: 3000});
                            this.userService.getUsuarios()
                              .subscribe(resp => {
                                this.usuarios = resp
                              })
                        } else {
                            this.messageService.add({severity:'error', summary: 'Operación Fallida', detail: 'Personal no encontrado', life: 3000});
                        }
                    })
            }
        });
    }

    hideDialog() {
        this.productDialog1 = false;
        this.productDialog = false;
        this.submitted = false;
    }

    

    /* logOut() {
      this.userService.rolUser = 'standart';
      this.router.navigateByUrl('/user')
    } */

    updateUser() {
        this.submitted = true;
        const {id, nombre, apellido, dni, email, unidadrevista} = this.docente

        this.userService.updateDocente(id, nombre, apellido, dni, email, unidadrevista)
            .subscribe(resp => {
                if(resp.ok) {
                    this.messageService.add({severity:'success', summary: 'Actualizado', detail: 'Docente Actualizado correctamente', life: 3000});
                    this.userService.getUser()
                        .subscribe(resp => {
                          this.docentes = resp
                    });
                } else {
                    this.messageService.add({severity:'error', summary: 'Error', detail: `${resp.message}`, life: 3000});
                }
            })
            

            this.hideDialog();

        
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

    saveProduct() {
        this.submitted = true;
        const { nombre, apellido, dni, email, unidadrevista} = this.docente;
        this.userService.createDocente(nombre, apellido, dni, email, unidadrevista )
          .subscribe(resp => {
            if(resp.ok) {
              this.messageService.add({severity:'success', summary: 'ÉXITO', detail: 'Docente Creado Exitosamente', life: 7000});
              this.productDialog1 = false;
              this.userService.getUser().subscribe(resp => {
                this.docentes = resp
              })
              return
            } else {
              this.messageService.add({severity:'error', summary: 'ERROR', detail: `${resp.message}`, life: 7000});
              this.productDialog1 = false;
            }
            
          })      
    }
    saveNewUsuario() {
        this.submitted = true;
        const { email } = this.docente;
        this.userService.createNewUsuario(email)
          .subscribe(resp => {
            if(resp.ok) {
              this.messageService.add({severity:'success', summary: 'ÉXITO', detail: `${resp.message}`, life: 7000});
              this.productDialog2 = false;
              this.userService.getUsuarios().subscribe(resp => {
                this.usuarios = resp
              })
              return
            } else {
              this.messageService.add({severity:'error', summary: 'ERROR', detail: `${resp.message}`, life: 7000});
              this.productDialog2 = false;
            }
            
          })      
    }

  createId(): string {
      let id = '';
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for ( var i = 0; i < 5; i++ ) {
          id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
  }

  tablaUsuariosVisible() {
      this.tablaUsuarios = true
  }

  tablaDocentesVisible() {
    this.tablaUsuarios = false
  }

  

}
