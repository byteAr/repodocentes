import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class RegisterComponent implements OnInit {

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  formRegister: FormGroup;

  submitForm(value: { nombre: string, apellido: string, email: string, password: string, rePassword: string}): void {
    for (const key in this.formRegister.controls) {
      this.formRegister.controls[key].markAsDirty();
      this.formRegister.controls[key].updateValueAndValidity();
    }
  }
  get form(): { [key: string]: AbstractControl; }
{
    return this.formRegister.controls;
}


 
  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.formRegister.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };
 
  constructor(private fb: FormBuilder,
              private router: Router,
              private messageService: MessageService,
              private authService: AuthService) { 
                this.formRegister = this.fb.group({
                  nombre: ['', [Validators.required, Validators.minLength(3)]],
                  apellido: ['',[Validators.required, Validators.minLength(3)]],
                  email: ['', [Validators.required,Validators.pattern(this.emailPattern)/* pattern(/^[a-zA-Z0-9._-]+\@\gna\.\gob\.\ar$/) */]],
                  password: ['', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/)]],
                  repassword: ['', [Validators.required, this.confirmValidator]]
                });
  }

  ngOnInit(): void {
  }

  campoValido( campo: string) {
    return this.formRegister.get(campo)?.invalid
          && this.formRegister.get(campo)?.touched;
  }

  register() {
    const { nombre,apellido, email,password } = this.formRegister.value;
    this.authService.register( nombre,apellido,email,password )
     .subscribe( ok => {
        if ( ok === true ) {
          this.messageService.add({severity:'success', summary:'Registro Exitoso', detail:'Registro exitoso, verifique la bandeja de entrada de su correo para completar el registro', life: 5000});
          setTimeout(() => {            
            this.router.navigateByUrl('/admin');
          }, 5000);
        } else {   
          console.log(ok);
          this.messageService.add({severity:'error', summary:'ERROR', detail:'ERROR', life: 5000});
        }
     });
  } 
  

  /* passwordSonIguales() {
    console.log(this.formRegister)
    /* const { password, repassword } = this.formRegister.value;
    if(password != repassword) {
      return false
    } else {
      return true
    } */
   

}
