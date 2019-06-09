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

  constructor(private oidc: OidcFacade, private router: Router, private store: Store<AppState>) { }

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.oidc.identity$.pipe(
      take(1),
      switchMap(user => {
        if (user && !user.expired) {
          return of(true);
        } else {
          console.log(state.url)
          // this.router.navigateByUrl(
          //   this.router.createUrlTree(
          //     ['/login'], {
          //       queryParams: {
          //         returnUrl: state.url
          //       }
          //     }
          //   )
          // )
          // return of(false)
          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }, replaceUrl: true })
          return of(false);
        }
      }),

    );
  }

}
