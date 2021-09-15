import { Component, OnInit } from '@angular/core';
import { user } from '../login/login.component';
import { ServiceService } from '../service.service';
import { Usuarios } from '../usuarios';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuarios: Usuarios[] = [];
  usuario = user;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.list().subscribe(data => console.log(data));
  }

}
