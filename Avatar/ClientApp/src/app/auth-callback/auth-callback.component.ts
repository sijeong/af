import { Component, OnInit, Inject } from '@angular/core';

import { switchMap, first, tap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LocalStorage } from '@ngx-pwa/local-storage'
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';
@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {
  error: boolean;
  returnUrl;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute, @Inject(LOCAL_STORAGE) private storage: StorageService) { }
  async ngOnInit() {

    if (this.route.snapshot.fragment.indexOf('error') >= 0) {
      this.error = true;
      return;
    }
    await this.authService.completeAuthentication();

    const returnUrl = this.storage.get('redirect');
    console.log(returnUrl)
    this.router.navigate([returnUrl]);
  }
}
