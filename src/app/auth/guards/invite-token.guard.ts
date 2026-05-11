import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from 'src/app/admin/services/auth.service';

@Injectable({ providedIn: 'root' })
export class InviteTokenGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const token = route.paramMap.get('token');
    if (!token) {
      this.router.navigateByUrl('/auth');
      return of(false);
    }

    return this.authService.validateInviteToken(token).pipe(
      map(resp => {
        if (resp.ok) return true;
        this.router.navigateByUrl('/auth');
        return false;
      }),
      catchError(() => {
        this.router.navigateByUrl('/auth');
        return of(false);
      })
    );
  }
}
