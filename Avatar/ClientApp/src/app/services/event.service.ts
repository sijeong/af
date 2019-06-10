import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, switchMap } from 'rxjs/operators'
import { Event} from '../models/event'
import {environment as env} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {
    
  }

  getEvents() {
    return this.http.get<Event[]>(env.base_Url + '/api/event').pipe(
      // switchMap(e => new AxiomSchedulerEvent(e.title, e.from && new Date(e.from), e.from && new Date(e.from), {id: e.id, title: e.title}, "", false ));
      tap(e => console.log(e))
    )
  }
}
