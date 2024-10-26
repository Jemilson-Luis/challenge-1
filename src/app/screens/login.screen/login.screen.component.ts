import { Component, OnInit } from '@angular/core';
import CustomInputTypes from '../../types/customInput.types';
import { CustomInputComponent } from '../../components/custom-input/custom-input.component';
import { Router, RouterLink } from '@angular/router';
import { UsersServicesService } from '../../services/users.services.service';
import { Users } from '../../models/Users.models';
import { CommonModule } from '@angular/common';
import { ValidateInputService } from '../../services/validate-input.service';

@Component({
  selector: 'app-login.screen',
  standalone: true,
  imports: [CustomInputComponent, RouterLink, CommonModule],
  templateUrl: './login.screen.component.html',
  styleUrl: './login.screen.component.scss'
})
export class LoginScreenComponent{
  constructor(private _usersServices:UsersServicesService, private router:Router, private validations:ValidateInputService){ }
  public users:Users[] = []

  emailDetails:CustomInputTypes = { placeholder: 'Email', type: 'email', value: '', error: ''}
  passwordDetails:CustomInputTypes = {placeholder: 'Password', type: 'password', value: '', error: ''}

  handleClique(){
    const email = this.validations.validateInput({ type: 'email', value: this.emailDetails.value }) //validação retorna boolean
    const password = this.validations.validateInput({ type: 'password', value: this.passwordDetails.value }) //validação retorna boolean

    if(this.emailDetails.value === '' && this.passwordDetails.value === ''){
      this.emailDetails.error = 'Email is empty!'
      this.passwordDetails.error = 'Password is empy!'

    }else{
      if(!email) this.emailDetails.error='Format Invalid!'
      else if(!password) this.passwordDetails.error = 'Pelo menos 5 dígitos!'
      else this._usersServices.authenticate(this.emailDetails.value, this.passwordDetails.value).subscribe(data => {
        data.length === 0 ? this.emailDetails.error = 'User not found!'
        : this.passwordDetails.value != data[0].password
        ? (this.passwordDetails.error = 'Password invalid!', this.emailDetails.error = '')
        : (
          localStorage.setItem('email', `${this.emailDetails.value}`),
          this.router.navigate(['/home'])
        )
      })
    }
  }
}

