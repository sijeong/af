import { Component, OnInit } from '@angular/core';
import { Registration } from '../models/registration'
import { RegisterService } from '../services/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  success: boolean;
  error: string;
  userRegistration: Registration = { name: '', email: '', password: '' };
  submitted: boolean = false;

  constructor(private register: RegisterService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.register.register(this.userRegistration)
    .subscribe(
      res =>{
        if(res){
          this.success = true;
        }
      }
    )
  }

}
