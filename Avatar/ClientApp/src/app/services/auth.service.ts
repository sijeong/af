import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserManagerSettings, User, UserManager } from 'oidc-client';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authNavStatusSource = new BehaviorSubject<Boolean>(false);
  authStatus$ = this._authNavStatusSource.asObservable();

  private user: User | null;
  private manager = new UserManager(getClientSettings());

  constructor(private http: HttpClient, ) {
    this.manager.getUser().then(user => {
      this.user = user;
      this._authNavStatusSource.next(this.isAuthenticated())
    })
  }
  login(){
    return this.manager.signinRedirect();
  }

  async completeAuthentication(){
    this.user = await this.manager.signinRedirectCallback();
    this._authNavStatusSource.next(this.isAuthenticated());
  }
  
  register(userRegistration: any){
    // return this.http.post()
  }

  isAuthenticated(): boolean {
    return this.user != null && !this.user.expired;
  }

  get authroizationHeaderValue():string{
    return `${this.user.token_type} ${this.user.access_token}`;
  }
  get name(): string{
    return this.user != null ? this.user.profile.name: '';
  }
  
  signout(){
    this.manager.signoutRedirect();
  }
}

export function getClientSettings(): UserManagerSettings {
  return {
    authority: 'https://localhost:44388',
    client_id: 'angular_spa',
    redirect_uri: 'http://localhost:4200/callback',
    post_logout_redirect_uri: 'http://localhost:4200/',
    response_type: "id_token token",
    scope: "openid profile email api.read",
    filterProtocolClaims: true,
    loadUserInfo: true,
    automaticSilentRenew: true,
    silent_redirect_uri: 'http://localhost:4200/silent-renew.html'
  };
}
