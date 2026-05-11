import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/admin/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [MessageService],
  standalone: false
})
export class RegistroComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  formRegister: UntypedFormGroup;
  inviteToken = '';
  loading = false;

  get form(): { [key: string]: AbstractControl } {
    return this.formRegister.controls;
  }

  confirmValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
    if (!control.value) return { error: true, required: true };
    if (control.value !== this.formRegister?.controls['password']?.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private authService: AuthService
  ) {
    this.formRegister = this.fb.group({
      nombre:    ['', [Validators.required, Validators.minLength(3)]],
      apellido:  ['', [Validators.required, Validators.minLength(3)]],
      email:     [{ value: '', disabled: true }],
      password:  ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/)]],
      repassword: ['', [Validators.required, this.confirmValidator]]
    });
  }

  ngOnInit(): void {
    this.inviteToken = this.route.snapshot.paramMap.get('token') || '';

    // Pre-cargar el email desde el token
    this.authService.validateInviteToken(this.inviteToken).subscribe(resp => {
      if (resp.ok && resp.email) {
        this.formRegister.get('email')?.setValue(resp.email);
      }
    });
  }

  campoValido(campo: string): boolean {
    return !!(this.formRegister.get(campo)?.invalid && this.formRegister.get(campo)?.touched);
  }

  register(): void {
    if (this.formRegister.invalid) {
      Object.keys(this.formRegister.controls).forEach(k =>
        this.formRegister.get(k)?.markAsTouched()
      );
      return;
    }

    this.loading = true;
    const { nombre, apellido, password } = this.formRegister.value;
    const email = this.formRegister.get('email')?.value;

    this.authService.register(nombre, apellido, email, password).subscribe(ok => {
      this.loading = false;
      if (ok === true) {
        this.messageService.add({
          severity: 'success',
          summary: 'Registro Exitoso',
          detail: 'Verifique la bandeja de entrada de su correo para activar su cuenta.',
          life: 6000
        });
        setTimeout(() => this.router.navigateByUrl('/auth'), 6000);
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: typeof ok === 'string' ? ok : 'No se pudo completar el registro.',
          life: 5000
        });
      }
    });
  }
}
