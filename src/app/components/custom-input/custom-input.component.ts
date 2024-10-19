import { Component, Input } from '@angular/core';
import CustomInputTypes from '../../types/customInput.types';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss'
})

export class CustomInputComponent {
  @Input() detailInput:CustomInputTypes = {placeholder: '', type: ''}
}
