import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment as env } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }


  register(registration: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    return this.http.post(env.auth_Url + '/api/account', registration, httpOptions).pipe(
      catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
}
