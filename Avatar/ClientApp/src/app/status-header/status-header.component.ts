import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { pairwise, map } from 'rxjs/operators';
import * as faker from 'faker';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-status-header',
  templateUrl: './status-header.component.html',
  styleUrls: ['./status-header.component.css']
})
export class StatusHeaderComponent implements OnInit {
  trends: Trend[];
  
  arrowUp= faArrowUp;
  arrowDown=faArrowDown;

  constructor() { }
  onClick(o) {

  }
  ngOnInit() {
    const source = Observable.create(function (observer) {
      let seed = 100;
      const interval = setInterval(() => {
        let res = faker.random.number(100000);
        seed++;
        faker.seed(seed);
        observer.next(res);
      }, 1000);
      return () => clearInterval(interval);
    }).pipe(
      pairwise(),
      map(([a, b]) => { return { value: b, trend: b - a } })
    ).subscribe(val => {
      // console.log(val);
      this.trends[faker.random.number(4)].value = val.value;
      this.trends[faker.random.number(4)].trend = val.trend > 0 ? true : false;
    });

    this.trends = [
      {
        title: "oil",
        value: 123,
        trend: true
      },
      {
        title: "machinary",
        value: 100,
        trend: true
      },
      {
        title: "mineral",
        value: 188,
        trend: false
      },
      {
        title: "coal",
        value: 109,
        trend: true
      },
      {
        title: "ice",
        value: 456,
        trend: false
      },

    ]

  }
}


export interface Trend {
  title: string;
  value: number;
  trend: boolean;
}
