import { Component, EventEmitter, Output } from '@angular/core';
import { CustomInputComponent } from '../custom-input/custom-input.component';
import CustomInputTypes from '../../types/customInput.types';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-create-task',
  standalone: true,
  imports: [CustomInputComponent, CommonModule, FormsModule ],
  templateUrl: './card-create-task.component.html',
  styleUrl: './card-create-task.component.scss'
})
export class CardCreateTaskComponent {
  @Output() sendData:EventEmitter<any> = new EventEmitter

  titleInput:CustomInputTypes = {
    placeholder: 'Write the title here',
    type: 'text',
    name: '',
    error: ''
  }
  descInput = {
    placeholder: 'Write the description here',
    type: 'text',
    name: '',
  }

  handleClique(){
    this.sendData.emit({title:this.titleInput.name, desc: this.descInput.name})    
  }
}
