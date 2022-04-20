import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/admin/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarRolAdminGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService) {

  }
  canActivate(): any {

    const rol= this.authService.usuario.rol;
    if( rol === 'admin') {
      return true
    } else {
      this.router.navigateByUrl('')
    }
  }
  
}
