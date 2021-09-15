import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Usuarios } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private readonly API = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Usuarios[]>(this.API);
  }

}
 