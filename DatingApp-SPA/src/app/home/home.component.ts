import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValue();
  }

  registerToggle(){
    this.registerMode = true;
  }

  cancelRegisterMode(registerMode = false){  // registerMode = false is optional => you can just say this.registerMode = false.
    this.registerMode = registerMode;
  }

  getValue(){
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }

}
