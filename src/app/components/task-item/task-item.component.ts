import { Component, computed, Input, OnInit, signal, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksServicesService } from '../../services/tasks.services.service';
import { TaskTypes } from '../../types/tasksModel.types';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})

export class TaskItemComponent implements OnInit {
  protected animeChevron = computed(() => this.detailTask())
  protected dataTemplate = signal('')
  protected destroiComponent = signal(true)
  protected detailTask = signal(false)
  private localDate = new Date()

  constructor(private TaskServices: TasksServicesService) { }

  @Input() showHiddesTask:boolean = false
  @Input() tasks: TaskTypes = {
    id: '',
    title: '',
    desc: '',
    date: '',
    userEmail: '',
    checked: false,
    priority: '',
    todo: ''
  }

  ngOnInit(): void {
    if (this.tasks.date == this.defaultData()) {
      this.dataTemplate.set('Hoje')

    } else if (this.tasks.date === `${this.localDate.getFullYear()}-${this.localDate.getMonth()}-${this.localDate.getDate() + 1}`) {
      this.dataTemplate.set('Amanhã')

    } else if (this.tasks.date === `${this.localDate.getFullYear()}-${this.localDate.getMonth()}-${this.localDate.getDate() - 1}`) {
      this.dataTemplate.set('Ontem')

    } else if(this.tasks.date === ''){
      this.dataTemplate.set('')
    }else {
      this.dataTemplate.set(this.dataCustom(this.tasks.date))
    }   
  }

  dataCustom(date: string) {
    /* dd-mm-yyyy */

    let dataSplited = date.split('-')
    return `${dataSplited[2]}/${dataSplited[1]}/${dataSplited[0]}`
  }

  defaultData() {
    /* yyyy-mm-dd */

    return `${this.localDate.getFullYear()}-${this.localDate.getMonth()}-0${this.localDate.getDate()}`
  }

  extendTask() { this.detailTask.set(!this.detailTask()) }

  updateDateTask(date: string, id: string) {
    let customDate: string = ''

    if (date === 'Hoje') {
      customDate = this.defaultData()
      this.tasks.date = this.defaultData()
      this.dataTemplate.set('Hoje')


    } else if (date === 'Amanhã') {
      customDate = `${this.localDate.getFullYear()}-${this.localDate.getMonth()}-0${this.localDate.getDate() + 1}`
      this.tasks.date = customDate
      this.dataTemplate.set('Amanhã')

    } else {
      customDate = date
      this.tasks.date = date
      this.dataTemplate.set(this.dataCustom(date))
    }

    this.TaskServices.updateTask({ date: customDate }, id).subscribe()
  }

  updateDescTask(desc: string, id: string) {
    this.TaskServices.updateTask({ desc }, id).subscribe
      (data => this.tasks.desc = desc)
  }

  updatePriorityTask(priority: string, id: string) {
    this.TaskServices.updateTask({ priority }, id).subscribe
      (data => this.tasks.priority = priority)
  }

  dropTask(id: string) {
    this.TaskServices.delete(id).subscribe
      (data => this.destroiComponent.set(false))
  }

  updateTitleTask(title: string, id: string) {
    this.TaskServices.updateTask({ title }, id).subscribe
      (data => this.tasks.title = title)
  }

  updateCheckStateTask(checked: boolean, id: string) {
    this.TaskServices.updateTask({ checked }, id).subscribe
      (data => this.tasks.checked = checked)
  }
}
