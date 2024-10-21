import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { TaskModelTypes } from '../../types/tasksModel.types';
import { FormsModule } from '@angular/forms';
import { CardUpdateTaskComponent } from '../card-update-task/card-update-task.component';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, FormsModule, CardUpdateTaskComponent],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  colors = ['#ffa6a699', '#2ba0ff99', '#dc2bff99', '#dc2bff99', '#dc2bff99','#2bff7c99']
  showMenu:boolean = false
  idUser  =  localStorage.getItem('id')
  showCard:boolean = false

  @Input() tasks:TaskModelTypes = {
    date: '',
    desc: '',
    id: '',
    title: '',
    idUser: this.idUser != null ? this.idUser : ''
  }

  @Output() deleteTask:EventEmitter<string> = new EventEmitter()
  @Output() updateTask:EventEmitter<TaskModelTypes> = new EventEmitter()

  
  handleEdit(props:TaskModelTypes){
    this.updateTask.emit(props)
  }
  
  handleDelet(id:string){
    this.deleteTask.emit()
  }
  changeShowMenu(){
    this.showMenu = !this.showMenu
  }
}
