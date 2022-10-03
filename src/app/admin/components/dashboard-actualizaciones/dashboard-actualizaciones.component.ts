import { Component,ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {MenuItem, MessageService, PrimeNGConfig} from 'primeng/api';
import { AuthService } from 'src/app/admin/services/auth.service';

@Component({
  selector: 'app-dashboard-actualizaciones',
  templateUrl: './dashboard-actualizaciones.component.html',
  styleUrls: ['./dashboard-actualizaciones.component.css']
})
export class DashboardActualizacionesComponent {
  miFormulario: FormGroup = this.fb.group({
    titulo   : ['', [ Validators.required, Validators.minLength(5) ]],
    lugar    : ['', [ Validators.required, Validators.minLength(3) ]],
    fecha    : ['', Validators.required],
    miniatura: ['', Validators.required],
    banner   : ['', Validators.required],
    novedad  : ['', Validators.required]
  })
  private fileTmp:any;
  public text: string = '';
  ckeditorContent: string = "<b>Probando Contenido</b>";
   
  items: MenuItem[] = [];
  formNovedad     : FormGroup;
  public imgMiniarura?: File;
  public imgBanner?: File;

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

     isValid( campo: string) {
      return this.miFormulario.controls[campo].errors
             && this.miFormulario.controls[campo].touched
     }

     imgMiniatura(event:any) {
      console.log(event.files[0])
     }

  /* ngAfterViewChecked(): void {
    let editor = this.ckeditor.instance;
    editor.config.height = '400';
    editor.config.toolbarGroups = [
      { name:'document', groups: ['mode', 'document', 'doctools'] },
      { name: 'clipboard', groups: ['clipboard', 'undo']},
      { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
      { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
      { name: 'insert', groups: ['insert']}
    ];
    editor.config.removeButton = 'Source,Save,Templates,Find,Replace,SelectAll,Form,Radio';
    
  } */
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

  guardar() {
    if( this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return
    }
    console.log(this.miFormulario.value)
    this.miFormulario.reset();
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
