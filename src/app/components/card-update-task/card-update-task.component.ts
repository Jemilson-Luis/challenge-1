import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import CustomInputTypes from '../../types/customInput.types';
import { FormsModule } from '@angular/forms';
import { CustomInputComponent } from '../custom-input/custom-input.component';
import { TaskModelTypes } from '../../types/tasksModel.types';

@Component({
  selector: 'app-card-update-task',
  standalone: true,
  imports: [FormsModule, CustomInputComponent],
  templateUrl: './card-update-task.component.html',
  styleUrl: './card-update-task.component.scss'
})
export class CardUpdateTaskComponent implements OnInit {
  @Output() sendData:EventEmitter<any> = new EventEmitter
  @Input() dataForm:TaskModelTypes = { 
    id: '', 
    title: '' ,
    desc: '', 
    date: '', 
    idUser: '', 
  }

  ngOnInit(): void {
    
  }
  descInput = {
    placeholder: this.dataForm.title,
    type: 'text',
    name: this.dataForm.desc,
  }

  titleInput:CustomInputTypes = {
    placeholder: this.dataForm.title,
    type: 'text',
    name: this.dataForm.title,
    error: ''
  }


  handleClique(){
    this.sendData.emit(this.dataForm)    
  }
}
