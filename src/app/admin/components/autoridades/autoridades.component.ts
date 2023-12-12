import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators, FormControl } from '@angular/forms';
import { NovedadServiceService } from '../../services/novedad-service.service';


@Component({
  selector: 'app-autoridades',
  templateUrl: './autoridades.component.html',
  styleUrls: ['./autoridades.component.css']
})
export class AutoridadesComponent implements OnInit {
  miFormulario: UntypedFormGroup = this.fb.group({    
    autoridades  : ['', Validators.required]
  })

  constructor(
    private novedadService: NovedadServiceService,
    private fb: UntypedFormBuilder,
  ) {

   }

  ngOnInit(): void {
  }
  guardar() {
    if( this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return
    }
    const body = new FormData();
    const {autoridades} = this.miFormulario.controls;
    body.append('autoridades', autoridades.value)
    console.log(autoridades)

    this.novedadService.createNewNovedadFugaz(body)
      .subscribe(resp => {
        console.log(resp);
      })   
      

    this.miFormulario.reset();
  }

  isValid( campo: string) {
    return this.miFormulario.controls[campo].errors
           && this.miFormulario.controls[campo].touched
   }

}
