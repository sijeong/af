import { Component, OnInit } from '@angular/core';
import { Observable, of, interval } from 'rxjs';
import { pairwise, map, throttle } from 'rxjs/operators';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

import { Store, select } from '@ngrx/store';
import { AppState } from '../root-store';
import { selectSalesData } from '../realtime-table/store/selectors';
import { OidcFacade } from 'ng-oidc-client';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-status-header',
  templateUrl: './status-header.component.html',
  styleUrls: ['./status-header.component.css']
})
export class StatusHeaderComponent implements OnInit {
  arrowUp = faArrowUp;
  arrowDown = faArrowDown;
  
  auth$
  res$ = this.store.pipe(select(selectSalesData)).pipe(
    map(a => a.map(b => {
      return {
        name: b.label,
        value: b.data
      }
    })),
    pairwise(),
    throttle(val => interval(5000))
  )

  constructor(private store: Store<AppState>, private authService: AuthService) { 
    this.auth$ = this.authService.authStatus$
  }

  onClick(o) {

  }
  ngOnInit() {
  }
}
