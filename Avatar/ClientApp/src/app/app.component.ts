import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './services/auth.service';
import {
  faUserCircle, faBookOpen, faCalendar, faSignOutAlt, faHome
} from '@fortawesome/free-solid-svg-icons';
import { SignalrService } from './services/signalr.service';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';
import { AppState } from './root-store';
import { Store, select } from '@ngrx/store';
import { selectAllCommands } from './setting/store/command.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('burger') burger: ElementRef;
  @ViewChild('menu') menu: ElementRef;

  _userCircle = faUserCircle;
  _article = faBookOpen;
  _calender = faCalendar;
  _signOut = faSignOutAlt;
  _home = faHome;

  auth$
  cmds$
  constructor(private router: Router, private store: Store<AppState>, private route: ActivatedRoute, @Inject(LOCAL_STORAGE) private storage: StorageService, private authService: AuthService, private service: SignalrService) {
    this.auth$ = this.authService.authStatus$;
    this.cmds$ = this.store.pipe(
      select(selectAllCommands)
    )
  }

  toggleNavbar() {
    // this.burger.nativeElement.classList.toggle('is-active');
    this.menu.nativeElement.classList.toggle('is-hidden-mobile');
  }
  onLoginClick() {
    this.authService.login();
  }

  onLogoutClick() {
    this.storage.set('redirect', '/');
    this.authService.signout();
  }
  ngOnInit() {
    this.service.startHttpRequest();
  }
}
