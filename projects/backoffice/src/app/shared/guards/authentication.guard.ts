import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthApplication } from '../../core/application/auth.application';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate, CanLoad {
  constructor(
    @Inject(AuthApplication) private auth: AuthApplication,
    private router: Router
  ) {}

  canActivate(): boolean {
    return this.validateAuthentication();
  }

  canLoad(): boolean {
    return this.validateAuthentication();
  }

  validateAuthentication() {
    const isUserLogged = this.auth.isAuthenticated;

    if (!isUserLogged) {
      this.router.navigate(['/']);
    }

    return isUserLogged;
  }
}
