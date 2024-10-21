import { Component, OnInit } from '@angular/core';
import CustomInputTypes from '../../types/customInput.types';
import { CustomInputComponent } from '../../components/custom-input/custom-input.component';
import { Router, RouterLink } from '@angular/router';
import { UsersServicesService } from '../../services/users.services.service';
import { Users } from '../../models/Users.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login.screen',
  standalone: true,
  imports: [CustomInputComponent, RouterLink, CommonModule ],
  templateUrl: './login.screen.component.html',
  styleUrl: './login.screen.component.scss'
})
export class LoginScreenComponent{
  constructor(private _usersServices:UsersServicesService, private router:Router){ }
  public users:Users[] = []

  emailDetails:CustomInputTypes = {
    placeholder: 'Email',
    type: 'email',
    name: '',
    error: ''
  }

  passwordDetails:CustomInputTypes = {
    placeholder: 'Password',
    type: 'password',
    name: '',
    error: ''
  }

  handleClique(){
    if(this.emailDetails.name === '' || this.emailDetails.name === '' ){
      this.emailDetails.error = 'Email is empty!'
      this.emailDetails.error = 'Password is empy!'
      
    }else{
      // Aweit a email in param
      this._usersServices.authenticate(this.emailDetails.name).subscribe(data =>{
        if(data.length === 0){
          this.emailDetails.error = 'Invalid email!'
  
        }else{
          if(data[0].password === this.passwordDetails.name){
            this.passwordDetails.error = ''
            this.emailDetails.error = ''
            localStorage.setItem('email', `${this.emailDetails.name}`)
            this.router.navigate(['/home'])
  
          }else{
            this.emailDetails.error = ''
            this.passwordDetails.error = 'Invalid password!'
          }
        }
      })
    }
  }
}

