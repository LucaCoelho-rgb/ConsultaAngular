import { Component, OnInit } from '@angular/core';
export var user = "";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  onUserEnter(event: Event){
  user = (<HTMLInputElement>event.target).value;
  }
}
