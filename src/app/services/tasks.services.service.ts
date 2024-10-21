import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { baseUrl } from '../environment/environment'
import { Tasks } from '../models/Tasks.model';
import { map } from 'rxjs';
import { TaskModelTypes } from '../types/tasksModel.types';

@Injectable({
  providedIn: 'root'
})
export class TasksServicesService {
  constructor( private _httpClient:HttpClient) { }
  emailActive = localStorage.getItem('email')

  findAll(){
    return this._httpClient.get<Tasks[]>(baseUrl+'tasks').pipe(
      map(task => task.filter((i)=> i.userEmail === this.emailActive ))
    )
  }

  post({ date, desc, userEmail, title }:TaskModelTypes){
    return this._httpClient.post<Tasks>(baseUrl+'tasks', { title, desc, date, userEmail })
  }

  update(params:TaskModelTypes){
    return this._httpClient.put<Tasks>(baseUrl+`tasks/${params.id}`, params)
  }

  delete(id:string){
    return this._httpClient.delete<Tasks[]>(baseUrl+'tasks/'+id)
  }

  filter(params:string){
    return this.findAll().pipe(
      map(task => task.filter( i => i.title.toLocaleLowerCase() === params.toLocaleLowerCase() ))
    )
  }
}
