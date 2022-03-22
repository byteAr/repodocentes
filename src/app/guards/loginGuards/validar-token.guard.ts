import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/admin/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService,
              private router: Router) {

  }

  canActivate(): Observable<boolean> | boolean {

    return this.authService.validarToken()
            .pipe(
              tap( ok => {
                if ( !ok ) {  
                  this.router.navigateByUrl('/admin');
                }
              })
            );
  }
  canLoad(): Observable<boolean> | boolean {

    return this.authService.validarToken()
            .pipe(
              tap( ok => {
                if ( !ok ) {
                  this.router.navigateByUrl('/admin');
                }
              })
            );
  }

  
  
}
