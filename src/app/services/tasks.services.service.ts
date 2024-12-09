import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { baseUrl } from '../environment/environment'
import { map } from 'rxjs';
import { TaskTypes } from '../types/tasksModel.types';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class TasksServicesService {
  constructor(private _httpClient: HttpClient) { }

  private _LocalStrorage: LocalStorageService = new LocalStorageService

  userEmail = this._LocalStrorage.getStorage('activeUser')


  findAll() {
    return this._httpClient.get<TaskTypes[]>(baseUrl + 'tasks').pipe(
      map(task => {
        this._LocalStrorage.getStorage('activeUser')
        return task.filter((i) => {
          return i.userEmail === this._LocalStrorage.getStorage('activeUser')
        }
        )
      }))
  }

  searchTask(value: string) {
    return this.findAll().pipe(
      map(
        data => data.filter(e => e.title.toLowerCase().includes(value.toLowerCase()))
      )
    )
  }

  add(title: string) {
    return this._httpClient.post<TaskTypes>(baseUrl + 'tasks', {
      title: title,
      desc: '',
      date: '',
      priority: '',
      userEmail: this._LocalStrorage.getStorage('activeUser'),
      checked: false
    })
  }

  updateTask(value: any, id: string) {
    return this._httpClient.patch<string>(baseUrl + `tasks/${id}`, value)
  }

  delete(id: string) {
    return this._httpClient.delete<TaskTypes[]>(baseUrl + 'tasks/' + id)
  }
}
