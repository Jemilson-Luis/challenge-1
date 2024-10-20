import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from '../../components/header-component/header-component.component';
import { TaskItemComponent } from '../../components/task-item/task-item.component';
import { TaskModelTypes } from '../../types/tasksModel.types';
import { TasksServicesService } from '../../services/tasks.services.service';
import { CustomInputComponent } from '../../components/custom-input/custom-input.component';
import CustomInputTypes from '../../types/customInput.types';

@Component({
  selector: 'app-home.screen',
  standalone: true,
  imports: [HeaderComponentComponent, TaskItemComponent, CommonModule, CustomInputComponent],
  templateUrl: './home.screen.component.html',
  styleUrl: './home.screen.component.scss'
})
export class HomeScreenComponent implements OnInit {
  constructor(private _TaskServices:TasksServicesService,){}
  listTasks: TaskModelTypes[] = [{date: '', desc: '', id:'', idUser: '', title: ''}]
  searchInput:CustomInputTypes = {
    placeholder: 'Search for title task',
    type: 'search',
    name: '',
    error: ''
  }

  ngOnInit(): void {
    console.log(this.listTasks.length)
    if(this.listTasks.length < 2){
      this._TaskServices.findAll().subscribe( data => {
        this.listTasks = data
      } )
    }
  }


  handleSearch(){
    const title = this.searchInput.name

    this._TaskServices.filter(title).subscribe( data => {
      this.listTasks = data
    } )
  }
}
