import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from '../../components/header-component/header-component.component';
import { TaskItemComponent } from '../../components/task-item/task-item.component';
import { TaskModelTypes } from '../../types/tasksModel.types';
import { TasksServicesService } from '../../services/tasks.services.service';
import { CustomInputComponent } from '../../components/custom-input/custom-input.component';
import CustomInputTypes from '../../types/customInput.types';
import { Router } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { CardCreateTaskComponent } from '../../components/card-create-task/card-create-task.component';
import { Tasks } from '../../models/Tasks.model';
import { CardUpdateTaskComponent } from '../../components/card-update-task/card-update-task.component';

@Component({
  selector: 'app-home.screen',
  standalone: true,
  imports: [HeaderComponentComponent, 
    CardCreateTaskComponent, 
    CardUpdateTaskComponent, 
    TaskItemComponent, 
    CommonModule, 
    CustomInputComponent, 
    FormsModule, 
    CustomInputComponent
  ],
  templateUrl: './home.screen.component.html',
  styleUrl: './home.screen.component.scss'
})
export class HomeScreenComponent implements OnInit {
  constructor(private _TaskServices:TasksServicesService, private router:Router){}
  idActiveUser = localStorage.getItem('email')
  listTasks: TaskModelTypes[] = []
  showCard:boolean = false
  showCardUpdate = false
  sucssessMsg:string = ''
  taskNotFound:string = ''

  searchInput:CustomInputTypes = {
    placeholder: 'Search for title task',
    type: 'search',
    name: '',
    error: ''
  }

  formData: Tasks = {
    id: '',
    title:'',
    desc:'',
    date: new Date().toLocaleDateString(),
    userEmail: this.idActiveUser != null ? this.idActiveUser : '',
  }


  showRegister(){
    this.showCard = !this.showCard
  }

  postTask(event:{title:string, desc:string}){
    this.formData.title = event.title
    this.formData.desc = event.desc

    this._TaskServices.post(this.formData).subscribe( data => {
      if(data.id != null){
        this.sucssessMsg = 'Task created!'
        window.location.reload()
      }
    })
  }

  changeStateOfCardUpdate(){
    this.showCardUpdate = !this.showCardUpdate
  }

  ngOnInit(): void {
    if(this.listTasks.length === 0){
      this._TaskServices.findAll().subscribe( data => {
        this.listTasks = data
      } )
    }
  }

  sendDataTask(params:TaskModelTypes){
    this.formData = params
    this.showCardUpdate = !this.showCardUpdate
  }

  updateTask(params:TaskModelTypes){
    this._TaskServices.update(this.formData).subscribe( data => {
      if(data.id != null){
        this.sucssessMsg = 'Update task!'
        window.location.reload()
      }
    })
  }

  deleteTask(id:string){
    this._TaskServices.delete(id).subscribe( data =>{
      window.location.reload()
      this.taskNotFound = 'Task deleted!'
      this.ngOnInit()
    } )
  }

  findAll(): void {
    this._TaskServices.findAll().subscribe( data => {
      this.listTasks = data
    } )
  }

  loggOut(){
    localStorage.clear()
    this.router.navigate([''])
  }

  handleSearch(){
    const title = this.searchInput.name

    if(title.length != 0){
      this._TaskServices.filter(title).subscribe( data => {
        if(data.length === 0) this.taskNotFound = 'Nenhuma tarefa encontrada!'
        else{
          this.taskNotFound = ''
          this.listTasks = data
        }
      })
    }else this.taskNotFound = 'Escreva alguma coisa!'
  }
}
