import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { emit } from 'process';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  regError: string;
  passError: string;
  constructor(private authService: AuthService, private  alertify: AlertifyService,private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(next => {
      this.alertify.success('Register Successfully');
      this.cancel();
    }, error => {
      this.alertify.error(error);
      // this.regError = error;
      this.errorHandling();
    }, () => this.router.navigate(['/members']));
  }


  cancel(){
    this.cancelRegister.emit();
  }

  errorHandling(){
    console.log('test');
    if (this.model.password.length < 6) {
      this.passError = 'Password should be at least 6';
    }else if (this.model.password.length > 20) {
      this.passError = 'Password should be less than 20';
    }
    if (this.model.username.length < 3) {
      this.regError = 'User Name should be at least 6';
    }else if (this.model.username.length > 12) {
      this.regError = 'User Name should be less than 20';
    }
  }

}
