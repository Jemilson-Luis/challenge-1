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

@Component({
  selector: 'app-home.screen',
  standalone: true,
  imports: [HeaderComponentComponent, TaskItemComponent, CommonModule, CustomInputComponent, FormsModule, CustomInputComponent],
  templateUrl: './home.screen.component.html',
  styleUrl: './home.screen.component.scss'
})
export class HomeScreenComponent implements OnInit {
  constructor(private _TaskServices:TasksServicesService, private router:Router){}
  listTasks: TaskModelTypes[] = []
  actDate:string = new Date().toLocaleDateString()
  showCard:boolean = false
  idUser = localStorage.getItem('id')
  sucssessMsg:string = ''
  taskNotFound:string = ''
  title:string = ''
  desc:string = ''


  searchInput:CustomInputTypes = {
    placeholder: 'Search for title task',
    type: 'search',
    name: '',
    error: ''
  }

  titleInput:CustomInputTypes = {
    placeholder: 'Write the title here',
    type: 'text',
    name: '',
    error: ''
  }

  formData:TaskModelTypes = {
    id: '',
    title: this.titleInput.name,
    desc: '',
    date: this.actDate,
    idUser: this.idUser != null ? this.idUser : ''
  }


  showRegister(){
    this.showCard = !this.showCard
  }

  post(){
    this.formData.title = this.titleInput.name

    this._TaskServices.post(this.formData).subscribe( data => {
      if(data.id != null){
        this.sucssessMsg = 'Task created!'
        window.location.reload()
      }
    })
  }

  updateTask(params:TaskModelTypes){
    this.formData = params
    this.titleInput.name = params.title
    this.showRegister()


    // this._TaskServices.update(this.formData).subscribe( data => {
    //   if(data.id != null){
    //     this.sucssessMsg = 'Task created!'
    //     window.location.reload()
    //   }
    // })
  }

  ngOnInit(): void {
    if(this.listTasks.length === 0){
      this._TaskServices.findAll().subscribe( data => {
        this.listTasks = data
      } )
    }
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
