import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../controllers/Users.controllers';
import { filter, Observable } from 'rxjs';


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
    return this._httpClient.get<Users[]>(this.url+`users?email=${email}`)
  }

  findOne(){
    return this._httpClient.get<Users[]>(this.url)
  }


}
