import { Injectable, Inject } from '@angular/core';
import { HubConnection, HubConnectionBuilder, JsonHubProtocol } from '@aspnet/signalr';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { Sales } from '../models/sales';
import { DataSuccessAction } from '../realtime-table/store/actions';
import { AppState } from '../root-store';
import { Store } from '@ngrx/store';
import { environment as env } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  hubConnection: HubConnection;
  public data$: Observable<Sales[]>;
  constructor(private http: HttpClient, private store: Store<AppState>) { }

  startConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(env.base_Url + '/sales')
      .withHubProtocol(new JsonHubProtocol())
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('SignalR connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  addTransferSalesDataListener = () => {
    this.hubConnection.on('publishSalesData', (data) => {
      this.data$ = of(data);
      this.store.dispatch(new DataSuccessAction({ sales: data }));
    });
  }
  startHttpRequest() {
    this.startConnection();
    this.addTransferSalesDataListener();
    this.http.get(env.base_Url + '/api/sales')
      .subscribe(res => {
        console.log(res);
      })
  }
  getInitialData(): Observable<Sales[]> {
    return this.http.get<Sales[]>(env.base_Url + '/api/sales/init');
  }
}

