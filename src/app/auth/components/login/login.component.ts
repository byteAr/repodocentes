import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
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

  @ViewChild('isButton') button?: ElementRef;
  @ViewChild('isSpinner') spinner?: ElementRef;
  productDialog?: boolean;
  submitted?: boolean;
  email         :string='';
  emailPattern  : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  formLogin     : FormGroup;

  submitForm(value: { email: string, password: string}): void {
    for (const key in this.formLogin.controls) {
      this.formLogin.controls[key].markAsDirty();
      this.formLogin.controls[key].updateValueAndValidity();
    }
  }
  get form(): { [key: string]: AbstractControl; } {
        return this.formLogin.controls;
  }


  constructor(private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private authService: AuthService,
    private render2: Renderer2) {
      this.formLogin = this.fb.group({
        email: ['', [Validators.required,Validators.pattern(this.emailPattern)/* pattern(/^[a-zA-Z0-9._-]+\@\gna\.\gob\.\ar$/) */]],
        password: ['', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/)]]
      });
     }

  errorMessage( message: string) {
    this.messageService.add({severity:'warn', summary:`${message}`, life: 5000});
  }

  login() {

    const asButton= this.button?.nativeElement;
    const asSpinner= this.spinner?.nativeElement;
    this.render2.setStyle(asButton, 'display', 'none');
    this.render2.setStyle(asSpinner, 'display', 'flex');


    const { email, password } = this.formLogin.value;

    this.authService.login( email, password )
     .subscribe( resp => {
        if ( resp.ok ) {
          if(resp.rol === 'admin') {
            this.router.navigateByUrl('admin/dashboard')
          } else if(resp.rol === 'standart') {
            this.router.navigateByUrl('invitado')
          }
        } else {
          this.errorMessage(resp);
          this.render2.setStyle(asButton, 'display', 'flex');
          this.render2.setStyle(asSpinner, 'display', 'none');
        }

     });

  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
}

openDialog() {
  this.productDialog=true;
  this.submitted=false

}

recuperarPass(){
  this.authService.recoveryPassword(this.email)
  .subscribe(resp => {
    if (resp.ok) {
      this.messageService.add({severity:'success', summary:'RECUPERACIÓN DE CONTRASEÑA', detail:`${resp.message}`, life: 5000});
    }  else {
      this.messageService.add({severity:'warn', summary:`${resp.message}`, life: 5000});
    }
  })
  this.submitted=true;
  this.hideDialog()
}


}

