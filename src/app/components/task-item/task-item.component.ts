import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskModelTypes } from '../../types/tasksModel.types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  userEmail  =  localStorage.getItem('id')

  @Input() tasks:TaskModelTypes = { date: '', desc: '', id: '', title: '', userEmail: this.userEmail != null ? this.userEmail : '' }
  @Output() deleteTask:EventEmitter<string> = new EventEmitter()
  @Output() updateTask:EventEmitter<TaskModelTypes> = new EventEmitter()

  showMenu:boolean = false
  showCard:boolean = false

  handleEdit = (props:TaskModelTypes) => this.updateTask.emit(props)
  handleDelet = (id:string) => this.deleteTask.emit(id)
}
