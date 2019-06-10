import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { OidcFacade } from 'ng-oidc-client';
import { switchMap, take, map, tap } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { AppState } from '../root-store';
import { AuthService } from './auth.service';
import { LocalStorage } from '@ngx-pwa/local-storage'
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService, @Inject(LOCAL_STORAGE) private storage: StorageService) { }

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isAuthenticated()) { return true; }
    this.storage.set('redirect', state.url.toString())
    this.router.navigate(['/login'], { queryParams: { redirect: state.url } });
    return false;
  }
}