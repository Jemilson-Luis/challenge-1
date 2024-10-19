import { Component, Input, Output } from '@angular/core';
import CustomInputTypes from '../../types/customInput.types';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss'
})

export class CustomInputComponent {
  @Input() detailInput:CustomInputTypes = {
    placeholder: '',
    type: '',
    name: ''
  }
  @Output() sendValue:string = ''

  value:string = ''

  handleLogin(){
    console.log('value')
  }
}
