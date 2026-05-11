import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/admin/services/auth.service';

const MAX_INTENTOS = 3;
const VENTANA_MS   = 60_000; // 1 minuto

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false
})
export class LoginComponent implements OnInit, OnDestroy {

  @ViewChild('isButton') button?: ElementRef;
  @ViewChild('isSpinner') spinner?: ElementRef;

  productDialog: boolean = false;
  submitted: boolean = false;
  email: string = '';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  formLogin: UntypedFormGroup;

  // Rate limiting
  bloqueado: boolean = false;
  segundosRestantes: number = 0;
  private countdownInterval?: ReturnType<typeof setInterval>;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private messageService: MessageService,
    private authService: AuthService,
    private render2: Renderer2
  ) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/)]]
    });
  }

  ngOnInit(): void {
    this.verificarBloqueoAlInicio();
  }

  ngOnDestroy(): void {
    this.limpiarIntervalo();
  }

  get form(): { [key: string]: AbstractControl } {
    return this.formLogin.controls;
  }

  submitForm(value: { email: string; password: string }): void {
    for (const key in this.formLogin.controls) {
      this.formLogin.controls[key].markAsDirty();
      this.formLogin.controls[key].updateValueAndValidity();
    }
  }

  // ── Rate limiting ────────────────────────────────────────────────────────

  private obtenerIntentos(): { intentos: number; desde: number } {
    const raw = sessionStorage.getItem('login_rl');
    if (!raw) return { intentos: 0, desde: Date.now() };
    try { return JSON.parse(raw); } catch { return { intentos: 0, desde: Date.now() }; }
  }

  private guardarIntentos(intentos: number, desde: number): void {
    sessionStorage.setItem('login_rl', JSON.stringify({ intentos, desde }));
  }

  private registrarIntento(): boolean {
    const ahora = Date.now();
    let { intentos, desde } = this.obtenerIntentos();

    if (ahora - desde >= VENTANA_MS) {
      intentos = 0;
      desde = ahora;
    }

    intentos++;
    this.guardarIntentos(intentos, desde);

    if (intentos >= MAX_INTENTOS) {
      const msRestantes = VENTANA_MS - (ahora - desde);
      this.iniciarCountdown(msRestantes);
      return false;
    }
    return true;
  }

  private verificarBloqueoAlInicio(): void {
    const ahora = Date.now();
    const { intentos, desde } = this.obtenerIntentos();
    const transcurrido = ahora - desde;
    if (intentos >= MAX_INTENTOS && transcurrido < VENTANA_MS) {
      this.iniciarCountdown(VENTANA_MS - transcurrido);
    }
  }

  private iniciarCountdown(msRestantes: number): void {
    this.bloqueado = true;
    this.segundosRestantes = Math.ceil(msRestantes / 1000);
    this.limpiarIntervalo();

    this.countdownInterval = setInterval(() => {
      this.segundosRestantes--;
      if (this.segundosRestantes <= 0) {
        this.bloqueado = false;
        sessionStorage.removeItem('login_rl');
        this.limpiarIntervalo();
      }
    }, 1000);
  }

  private limpiarIntervalo(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
      this.countdownInterval = undefined;
    }
  }

  // ── Acciones ─────────────────────────────────────────────────────────────

  login(): void {
    if (this.bloqueado) return;

    const puedeIntentar = this.registrarIntento();
    if (!puedeIntentar) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Demasiados intentos',
        detail: `Espere ${this.segundosRestantes} segundos para volver a intentar.`,
        life: 5000
      });
      return;
    }

    const asButton  = this.button?.nativeElement;
    const asSpinner = this.spinner?.nativeElement;
    this.render2.setStyle(asButton, 'display', 'none');
    this.render2.setStyle(asSpinner, 'display', 'flex');

    const { email, password } = this.formLogin.value;

    this.authService.login(email, password).subscribe(resp => {
      if (resp.ok) {
        sessionStorage.removeItem('login_rl');
        if (resp.rol === 'admin') {
          this.router.navigateByUrl('admin/dashboard');
        } else if (resp.rol === 'standart') {
          this.router.navigateByUrl('invitado');
        }
      } else {
        this.messageService.add({ severity: 'warn', summary: `${resp}`, life: 5000 });
        this.render2.setStyle(asButton, 'display', 'flex');
        this.render2.setStyle(asSpinner, 'display', 'none');
      }
    });
  }

  hideDialog(): void {
    this.productDialog = false;
    this.submitted = false;
  }

  openDialog(): void {
    this.productDialog = true;
    this.submitted = false;
  }

  recuperarPass(): void {
    this.authService.recoveryPassword(this.email).subscribe(resp => {
      if (resp.ok) {
        this.messageService.add({ severity: 'success', summary: 'RECUPERACIÓN DE CONTRASEÑA', detail: `${resp.message}`, life: 5000 });
      } else {
        this.messageService.add({ severity: 'warn', summary: `${resp.message}`, life: 5000 });
      }
    });
    this.submitted = true;
    this.hideDialog();
  }
}
