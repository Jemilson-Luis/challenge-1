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

  findAll(){
    return this._httpClient.get<Users[]>(this.url+'users')
  }

  authenticate(email:string){
    return this._httpClient.get<Users[]>(this.url+'users').pipe(
      map((user)=> user.filter(i => i.email === email ))
    )
  }

  findOne(){
    return this._httpClient.get<Users[]>(this.url)
  }
}
