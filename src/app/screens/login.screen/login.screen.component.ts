import { Component } from '@angular/core';
import CustomInputTypes from '../../types/customInput.types';
import { CustomInputComponent } from '../../components/custom-input/custom-input.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login.screen',
  standalone: true,
  imports: [CustomInputComponent, RouterLink],
  templateUrl: './login.screen.component.html',
  styleUrl: './login.screen.component.scss'
})
export class LoginScreenComponent {

  emailDetails:CustomInputTypes = { placeholder: 'Email', type: 'email' }
  passwordDetails:CustomInputTypes = { placeholder: 'Password', type: 'password' }

}
