import { Component, Input, Output } from '@angular/core';
import CustomInputTypes from '../../types/customInput.types';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss'
})

export class CustomInputComponent {
  @Input() detailInput:CustomInputTypes = { placeholder: '', type: '', value: '', error: ''}
  @Output() sendValue:string = ''

  inputError = 'error'
  value:string = ''
}
