import { Component,ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {MenuItem, MessageService, PrimeNGConfig} from 'primeng/api';
import { AuthService } from 'src/app/admin/services/auth.service';
import { NovedadServiceService } from '../../services/novedad-service.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-new-novedad',
  templateUrl: './new-novedad.component.html',
  styleUrls: ['./new-novedad.component.css']
})
export class NewNovedadComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    titulo   : ['', [ Validators.required, Validators.minLength(5) ]],
    lugar    : ['', [ Validators.required, Validators.minLength(3) ]],
    fecha    : ['', Validators.required],
    miniatura: ['', Validators.required],
    banner   : ['', Validators.required],
    novedad  : ['', Validators.required],
    pdf  : ['']
  })
  private fileTmp:any;
  public text: string = '';
  ckeditorContent: string = "<b>Probando Contenido</b>";
   
  items: MenuItem[] = [];
  formNovedad     : FormGroup;
  public imgMiniatura?: any;
  public imgBanner?: any;
  public pdf?: any;
  public NovedadBypass: any;

  get usuario() {
    return this.authService.usuario;
  }

  constructor(private authService: AuthService,
    private sanitizer: DomSanitizer,
    private novedadService: NovedadServiceService,
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

     saveMiniatura(event:any) {
      this.imgMiniatura = event.files[0];
     }

     saveBanner(event:any) {
      this.imgBanner = event.files[0]
     }
     savePdf(event:any) {
      this.pdf = event.files[0]
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

  guardar() {
    if( this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return
    }
    const body = new FormData();
    const { titulo, lugar, fecha, novedad} = this.miFormulario.controls;
    body.append('miniatura', this.imgMiniatura);
    body.append('banner', this.imgBanner);
    body.append('pdf', this.pdf );
    body.append('titulo', titulo.value);
    body.append('lugar', lugar.value);
    body.append('fecha', fecha.value);
    body.append('novedad', novedad.value );
    console.log(novedad.value);

    this.novedadService.createNewNovedad(body)
      .subscribe(resp => {
        console.log(resp);
      })
    


    this.miFormulario.reset();
  }

  getFile(event: any): any {
    this.fileTmp = event.files
    
  }

}
