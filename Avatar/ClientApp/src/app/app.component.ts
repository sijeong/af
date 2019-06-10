import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  
  auth$
  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {
    this.auth$ = this.authService.authStatus$
   }

  ngOnInit(){
    // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    // console.log(returnUrl)

    // this.router.navigate(returnUrl);  
  }
}
