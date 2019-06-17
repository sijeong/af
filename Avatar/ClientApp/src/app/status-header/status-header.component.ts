import { Component, OnInit } from '@angular/core';
import { Observable, of, interval } from 'rxjs';
import { pairwise, map, throttle, mergeMap, bufferCount } from 'rxjs/operators';
import { faArrowDown, faArrowUp, faArrowCircleUp, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

import { Store, select } from '@ngrx/store';
import { AppState } from '../root-store';
import { selectSalesData } from '../realtime-table/store/selectors';
import { AuthService } from '../services/auth.service';
import { } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-status-header',
  templateUrl: './status-header.component.html',
  styleUrls: ['./status-header.component.css']
})
export class StatusHeaderComponent implements OnInit {
  arrowUp = faArrowUp;
  arrowDown = faArrowDown;

  _arrowU = faArrowCircleUp
  _arrowD = faArrowCircleDown
  auth$
  data$
  res$ = this.store.pipe(select(selectSalesData)).pipe(
    throttle(() => interval(3000)),
    map(a => a.map(b => {
      return {
        name: b.label,
        value: b.data
      }
    })),
    pairwise(),
    // bufferCount(2)
  )
    // .subscribe(
    //   d => this.data$ = of(d).pipe(
    //     mergeMap(a => a),
    //     map(b => { return { test: b.name, test1: b.value } })
    //     // map(b => b.data)
    //   )
    // )



  constructor(private store: Store<AppState>, private authService: AuthService) {
    this.auth$ = this.authService.authStatus$
  }

  onClick(o) {

  }
  ngOnInit() {
    console.log('ticker started!!!')
  }
}
