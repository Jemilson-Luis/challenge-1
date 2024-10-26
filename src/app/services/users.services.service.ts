import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../models/Users.models';
import { filter, map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersServicesService {
  constructor( private _httpClient: HttpClient ){ }
  private url = 'http://localhost:3000/'

  findAll = () => this._httpClient.get<Users[]>(this.url+'users')

  authenticate(email:string, password:string){
    return this.findAll().pipe(
      map((user)=> user.filter(i => i.email === email ))
    )
  }

  loggOut = () => {
    localStorage.clear()
    return true
  }
}
