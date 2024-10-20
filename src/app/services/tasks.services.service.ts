import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { baseUrl } from '../env/baseUrlAPi'
import { Tasks } from '../models/Tasks.model';

@Injectable({
  providedIn: 'root'
})
export class TasksServicesService {
  constructor( private _httpClient:HttpClient) { }

  findAll(){
    return this._httpClient.get<Tasks[]>(baseUrl+'tasks')
  }

  filter(params:string){
    return this._httpClient.get<Tasks[]>(baseUrl+'tasks?title='+params)
  }
}
