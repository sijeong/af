import { Component, OnInit } from '@angular/core';
import { OidcFacade } from 'ng-oidc-client';
import { switchMap, first, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {

  constructor(private oidc: OidcFacade, private router: Router) { }

  callback$ = this.oidc.waitForAuthenticationLoaded().pipe(
    switchMap(loading => {
      return this.oidc.identity$.pipe(
        first(),
        switchMap(user => {
          if (user && !user.expired) {
            return of(true)
          }
          else {
            return of(false)
          }
        })
      )
    })
  )
  ngOnInit() {

    // this.oidc.waitForAuthenticationLoaded().pipe(
    //   switchMap(loading => {
    //     return this.oidc.identity$.pipe(
    //       first(),
    //       switchMap(user => {
    //         if (user && !user.expired) {
    //           tap(() => {alert('!!!')}),
    //           this.router.navigate(['/'])
    //           return of(true)
    //         } else {
    //           tap(() => {alert('!x!')}),
    //           this.router.navigate(['/'])
    //           return of(false)
    //         }
    //       })
    //     )
    //   })
    // ).toPromise()

  }

}
