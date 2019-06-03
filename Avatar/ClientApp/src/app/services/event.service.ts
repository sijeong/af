import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, switchMap } from 'rxjs/operators'
import { Event} from '../models/event'
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    console.log('base: ' + this.baseUrl)
  }

  getEvents() {
    return this.http.get<Event[]>(this.baseUrl + 'api/event').pipe(
      // switchMap(e => new AxiomSchedulerEvent(e.title, e.from && new Date(e.from), e.from && new Date(e.from), {id: e.id, title: e.title}, "", false ));
      tap(e => console.log(e))
    )
  }
}
