import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { TaskModelTypes } from '../../types/tasksModel.types';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  colors = ['#ffa6a699', '#2ba0ff99', '#dc2bff99', '#dc2bff99', '#dc2bff99','#2bff7c99']
  showMenu:boolean = false
  idUser  =  localStorage.getItem('id')

  @Input() tasks:TaskModelTypes = {
    date: '',
    desc: '',
    id: 0,
    title: '',
    idUser: this.idUser != null ? parseInt(this.idUser) : 0
  }

  @Output() deleteTask:EventEmitter<string> = new EventEmitter()

  taskColor = this.getColor()

  handleDelet(id:number){
    this.deleteTask.emit()
  }

  getColor(): string {
    const corlor = Math.floor(Math.random() * this.colors.length);
    return this.colors[corlor];
  }

  changeShowMenu(){
    this.showMenu = !this.showMenu
  }

}
