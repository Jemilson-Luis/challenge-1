import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from '../../components/header-component/header-component.component';
import { TaskItemComponent } from '../../components/task-item/task-item.component';
import { TaskModelTypes } from '../../types/tasksModel.types';
import { TasksServicesService } from '../../services/tasks.services.service';
import { CustomInputComponent } from '../../components/custom-input/custom-input.component';
import CustomInputTypes from '../../types/customInput.types';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Tasks } from '../../models/Tasks.model';

@Component({
  selector: 'app-home.screen',
  standalone: true,
  imports: [
    HeaderComponentComponent,
    TaskItemComponent,
    CommonModule,
    FormsModule,
    CustomInputComponent,
    RouterLink,
    
  ],
  templateUrl: './home.screen.component.html',
  styleUrl: './home.screen.component.scss'
})
export class HomeScreenComponent implements OnInit {
  constructor(private _TaskServices:TasksServicesService, private router:Router){}

  idActiveUser = `${localStorage.getItem('email')}`
  listTasks: TaskModelTypes[] = []

  searchInput:CustomInputTypes = { placeholder: 'Search for title task', type: 'search', value: '', error: '' }

  ngOnInit(): void { this._TaskServices.findAll().subscribe( data => this.listTasks = data) }

  updateTask = (params:TaskModelTypes) => this.router.navigate([`updateTask/${params.id}`])

  deleteTask = (id:any) => this._TaskServices.delete(id).subscribe( data => window.location.reload())

  searchTask(value:string){
    if(value.length < 1) this._TaskServices.findAll().subscribe( data => this.listTasks = data)
    else this._TaskServices.filter(value).subscribe(data => this.listTasks = data)
  }

  loggOut(){
    localStorage.clear()
    this.router.navigate([''])
  }
}
