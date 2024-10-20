import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from '../../components/header-component/header-component.component';
import { TaskItemComponent } from '../../components/task-item/task-item.component';
import { TaskModelTypes } from '../../types/tasksModel.types';
import { TasksServicesService } from '../../services/tasks.services.service';

@Component({
  selector: 'app-home.screen',
  standalone: true,
  imports: [HeaderComponentComponent, TaskItemComponent, CommonModule],
  templateUrl: './home.screen.component.html',
  styleUrl: './home.screen.component.scss'
})
export class HomeScreenComponent implements OnInit {
  constructor(private _TaskServices:TasksServicesService,){}
  listTasks: TaskModelTypes[] = [{date: '', desc: '', id:'', idUser: '', title: ''}]

  ngOnInit(): void {
    this._TaskServices.findAll().subscribe( data => {
      this.listTasks = data
    } )

  }
}
