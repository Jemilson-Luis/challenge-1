import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { baseUrl } from '../env/baseUrlAPi'
import { Tasks } from '../models/Tasks.model';
import { map } from 'rxjs';
import { TaskModelTypes } from '../types/tasksModel.types';

@Injectable({
  providedIn: 'root'
})
export class TasksServicesService {
  constructor( private _httpClient:HttpClient) { }

  findAll(){
    return this._httpClient.get<Tasks[]>(baseUrl+'tasks')
  }

  post({ date, desc, idUser, title }:TaskModelTypes){
    return this._httpClient.post<Tasks>(baseUrl+'tasks', { title, desc, date, idUser })
  }

  delete(id:number){
    return this._httpClient.delete<Tasks[]>(baseUrl+'tasks/'+id)
  }

  filter(params:string){
    return this.findAll().pipe(
      map(task => task.filter( i => i.title.toLocaleLowerCase() === params.toLocaleLowerCase() ))
    )
  }
}
