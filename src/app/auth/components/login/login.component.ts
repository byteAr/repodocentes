import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/admin/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  formLogin: FormGroup;

  submitForm(value: { email: string, password: string}): void {
    for (const key in this.formLogin.controls) {
      this.formLogin.controls[key].markAsDirty();
      this.formLogin.controls[key].updateValueAndValidity();
    }
  }
  get form(): { [key: string]: AbstractControl; }
{
    return this.formLogin.controls;
}


  constructor(private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private authService: AuthService) {
      this.formLogin = this.fb.group({        
        email: ['mlopez@iugna.edu.ar', [Validators.required,Validators.pattern(this.emailPattern)/* pattern(/^[a-zA-Z0-9._-]+\@\gna\.\gob\.\ar$/) */]],
        password: ['Margen.2', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/)]]
      });
     }

  errorMessage( message: string) {
    this.messageService.add({severity:'warn', summary:`${message}`, life: 5000});
  }

  login() {

    const { email, password } = this.formLogin.value;

    this.authService.login( email, password )
     .subscribe( resp => {
       console.log(resp);
        if ( resp.ok ) {
          if(resp.rol === 'admin') {
            console.log('entro por aca')
            this.router.navigateByUrl('admin/dashboard')
          } else if(resp.rol === 'standart') {
            this.router.navigateByUrl('invitado')
          }          
        } else {                  
          this.errorMessage(resp);
        }
        
     });
    
  }

  

}

