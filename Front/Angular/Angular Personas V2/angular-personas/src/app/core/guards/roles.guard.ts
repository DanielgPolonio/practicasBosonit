import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {
  constructor(
    private readonly router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const rolesPermitted = route.data.roles;
    const userRoles = localStorage.getItem('roles') || '[]';
    if (this.havePermissions(JSON.parse(userRoles), rolesPermitted)) {
      return true
    }
    this.router.navigate(['/']);
    return false;
  }

  havePermissions(userRoles: string[], rolesPermitted: string[]): boolean {
    return userRoles.some(
      userRole => rolesPermitted.some(rolPermitted => rolPermitted === userRole)
    );
  }

}
