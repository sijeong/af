import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { OidcFacade } from 'ng-oidc-client';
import { switchMap, take, map, tap } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { AppState } from '../root-store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // ru = this.store.pipe(select(selectRouterState => ))
  constructor(private oidc: OidcFacade, private router: Router, private store: Store<AppState>) { }

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const redirectUrl = route['_routerState']['url'];

    return this.oidc.identity$.pipe(
      take(1),
      switchMap(user => {
        if (user && !user.expired) {
          return of(true);
        } else {
          tap(() => console.log('*****' + redirectUrl))
          this.router.navigateByUrl(
            this.router.createUrlTree(
              ['/login'], {
                queryParams: {
                  redirectUrl
                }
              }
            )
          )
          // return of(false)
          // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } })
        }
      }),
      
    );
  }

}
