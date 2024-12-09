import { Component, OnInit, signal, viewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from '../../../components/header-component/header-component.component';
import { TaskItemComponent } from '../../../components/task-item/task-item.component';
import { TaskTypes } from '../../../types/tasksModel.types';
import { TasksServicesService } from '../../../services/tasks.services.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NewTaskInputComponent } from "../../../components/new-task-input/new-task-input.component";

@Component({
  selector: 'app-home.screen',
  standalone: true,
  imports: [
    HeaderComponentComponent,
    TaskItemComponent,
    CommonModule,
    FormsModule,
    NewTaskInputComponent,
  ],
  templateUrl: './home.screen.component.html',
  styleUrl: './home.screen.component.scss'
})
export class HomeScreenComponent implements OnInit {
  constructor(private _TaskServices: TasksServicesService, private router: Router) { }

  newTaskElement = viewChild('containerTasks', { read: ViewContainerRef })
  protected idActiveUser = `${localStorage.getItem('email')}`
  protected searchValue = signal('')
  protected showTasksChecked = signal(true)
  protected listTasks: TaskTypes[] = []
  protected toDestroy: boolean = false

  addNewTask(value: string) {
    this._TaskServices.add(value).subscribe(
      (data: TaskTypes) => {
        const element = this.newTaskElement()?.createComponent(TaskItemComponent).instance as TaskItemComponent
        element.tasks = data
      }
    )
  }

  searchTask(){
    if(this.searchValue().length === 0){
      this.showTasksChecked.set(true)
    }else{
      this.showTasksChecked.set(false)

    }

    this._TaskServices.searchTask(this.searchValue()).subscribe
    (data => this.listTasks = data)
  }

  showCheckedTask(){
    this.showTasksChecked.set(!this.showTasksChecked())
  }

  ngOnInit(): void {
    this._TaskServices.findAll().subscribe(data => {
      this.listTasks = data.sort((a, b) => {
        if (a.priority > b.priority) return + 1
        else return - 1
      })
    })
  }
  
  loggOut() {
    localStorage.clear()
    this.router.navigate([''])
  }
}
