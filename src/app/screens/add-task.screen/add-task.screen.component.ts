import { Component, OnInit } from '@angular/core';
import { CustomInputComponent } from '../../components/custom-input/custom-input.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import CustomInputTypes from '../../types/customInput.types';
import { TasksServicesService } from '../../services/tasks.services.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task.screen',
  standalone: true,
  imports: [
    CustomInputComponent,
    RouterLink,
    FormsModule
  ],
  templateUrl: './add-task.screen.component.html',
  styleUrl: './add-task.screen.component.scss'
})
export class AddTaskScreenComponent implements OnInit {
  constructor( private _TaskServices: TasksServicesService, private router: Router, private activeRoute: ActivatedRoute ){}
  user = `${localStorage.getItem('email')}`
  titlePage:string = 'Add new task'
  titleButton:string = 'Add task'
  update:boolean = false

  titleField:CustomInputTypes = { placeholder: 'Write the title here!', type: 'text', value: '', error: '' }
  descField:CustomInputTypes = { placeholder: 'Write the description here!', type: 'text', value: '', error: ''}

  idTask:string = ''

  ngOnInit(){
    this.getTask()
  }

  getTask(){
    this.idTask = String(this.activeRoute.snapshot.paramMap.get('id'))

    this._TaskServices.findOne(this.idTask).subscribe( data => {
      this.descField.value = data[0].desc
      this.titleField.value = data[0].title
      this.titlePage = 'Update task'
      this.titleButton = 'Update task'
      this.update = true
    })
  }


  handleTask = ()=>{
    if(this.titleField.value === '') this.titleField.error = 'Title is empty!'
    else if(this.descField.value === '') this.descField.error = 'Description is empy!'
    else{
      this._TaskServices.post({
        userEmail: this.user,
        title: this.titleField.value,
        desc: this.descField.value,
        date: new Date().toLocaleDateString(),
        id: ''
      }).subscribe(data => this.router.navigate(['/home']))
    }
  }

  updateTask = ()=>{
    if(this.titleField.value === '') this.titleField.error = 'Title is empty!'
    else if(this.descField.value === '') this.descField.error = 'Description is empy!'
    else{
      this._TaskServices.update({
        userEmail: this.user,
        title: this.titleField.value,
        desc: this.descField.value,
        date: new Date().toLocaleDateString(),
        id: this.idTask
      }).subscribe(data => this.router.navigate(['/home']))
    }
  }
}

