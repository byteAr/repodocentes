import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MessageService} from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/admin/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class RecoveryPasswordComponent implements OnInit {

  formRegister: FormGroup;
  id: any;

  submitForm(value: {password: string, rePassword: string}): void {
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
 

  constructor(private activatedRoute: ActivatedRoute,
              private messageService: MessageService,
              private router: Router,
              private authService: AuthService,
              private fb: FormBuilder) {
    this.formRegister = this.fb.group({
      password: ['', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/)]],
      repassword: ['', [Validators.required, this.confirmValidator]]
    });
   }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
  }

  campoValido( campo: string) {
    return this.formRegister.get(campo)?.invalid
          && this.formRegister.get(campo)?.touched;
  }

  updatePassword() {
    const { password } = this.formRegister.value;
    this.authService.updatePassword( password, this.id )
     .subscribe( resp => {       
        if ( resp.ok == true ) {
          this.messageService.add({severity:'success', summary:'', detail:'Contraseña Actualizada', life: 5000});
          setTimeout(() => {            
            this.router.navigateByUrl('./');
          }, 2000);
        } else {
          this.messageService.add({severity:'error', summary:'ERROR', detail:'ERROR', life: 5000});
        }
     });
  } 

}
