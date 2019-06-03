import { Injectable, Inject } from '@angular/core';
import { HubConnection, HubConnectionBuilder, JsonHubProtocol } from '@aspnet/signalr';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  hubConnection: HubConnection;

  startConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.baseUrl + '')
      .withHubProtocol(new JsonHubProtocol())
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('SignalR connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    // this.hubConnection = new HubConnectionBuilder()
    //   .withUrl(this.baseUrl + 'employees')
    //   .withHubProtocol(new JsonHubProtocol())
    //   .build();
    // console.log('start connection')
    // this.hubConnection.start().then(() => { console.log('connected') })
    // .catch((t) => console.log(t));
  }

  getAllEmpsStream(name: string): Observable<Employee[]> {
    const subject = new Subject<Employee[]>();
    this.hubConnection.stream<Employee[]>("GetEmps", name).subscribe(subject);
    return subject.asObservable();
  }

  // constructor() { }
}

export interface Employee {
  id: number;
  name: string;
}

