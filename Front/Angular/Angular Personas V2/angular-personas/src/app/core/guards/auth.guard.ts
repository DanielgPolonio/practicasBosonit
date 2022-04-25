import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from 'src/app/features/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly authService: AuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.checkToken(localStorage.getItem('_t') || '').pipe(map((response: boolean) => {
      if (response) {
        return true;
      }
      localStorage.removeItem('_t');
      localStorage.removeItem('roles');
      this.router.navigate(['/auth/login']);
      return false;
    }), catchError((error) => {
      localStorage.removeItem('_t');
      localStorage.removeItem('roles');
      this.router.navigate(['/auth/login']);
      return of(false);
    }));
  }


}