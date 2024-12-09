import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

import UserTypes from '../types/databaseUser.types';

@Injectable({
  providedIn: 'root'
})

export class UsersServicesService {
  private url = 'http://localhost:3000/'

  constructor(
    private _httpClient: HttpClient,
    private router: Router
  ) { }

  findAll = () => this._httpClient.get<UserTypes[]>(this.url + 'users')

  findOne(email: string) {
    return this.findAll().pipe(
      map((data) => data.filter((user) => user.email === email))
    )
  }

  todoLogin(email: string, password: string) {
    return this.findOne(email).pipe(
      map((data) => {
        if (data.length === 0) {
          return 'Email inválido!'

        } else if (data[0].password === password) {
          return data[0]

        } else {
          return "Password inválida!"
        }
      })
    )

  }

  loggOut = () => {
    localStorage.clear()
    this.router.navigate(['login'])
    return true
  }
}
