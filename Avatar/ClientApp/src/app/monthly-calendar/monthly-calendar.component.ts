import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import dayGridPlugin from '@fullcalendar/daygrid'
import { EventInput, EventSource } from '@fullcalendar/core';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-monthly-calendar',
  templateUrl: './monthly-calendar.component.html',
  styleUrls: ['./monthly-calendar.component.css']
})
export class MonthlyCalendarComponent implements OnInit {

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin];
  calendarEvents = [
    { title: 'sample title', start: new Date() }
  ]
  

  // rawData: ServerEvent[];
  constructor(private service: EventService) {

  }

  ngOnInit() {
    this.service.getEvents().pipe(

    ).subscribe(d => {
      this.calendarEvents = d;
    });

    // var mm = this.rawData.map(r => {
    //   return { titie: r.description, start: new Date(r.date) }
    // })
    // this.calendarEvents = [...mm];
  }

}
