import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import UserTypes from '../../../types/databaseUser.types';

import { CustomInputComponent } from '../../../components/custom-input/custom-input.component';
import { InputLoginComponent } from "../../../components/input-login/input-login.component";
import { UsersServicesService } from '../../../services/users.services.service';
import { ValidateInputService } from '../../../services/validate-input.service';
import { LocalStorageService } from '../../../services/local-storage.service';
import { Utils } from '../../../utils/utils';

@Component({
  selector: 'app-login.screen',
  standalone: true,
  imports: [
    CustomInputComponent,
    CommonModule,
    InputLoginComponent,
    FormsModule
  ],
  templateUrl: './login.screen.component.html',
  styleUrl: './login.screen.component.scss'
})

export class LoginScreenComponent implements OnInit {
  protected _utils = new Utils
  protected email: string = ''
  protected errors = signal('')
  protected password: string = ''
  protected users: UserTypes[] = []

  constructor(
    private _LocalStrorage: LocalStorageService,
    private _router: Router,
    private _ToValidateInput: ValidateInputService,
    private _Userservices: UsersServicesService,
  ) { }

  ngOnInit(): void {
    this._Userservices.findAll().subscribe(
      data => { this.users = data }
    )
  }

  splitedName = (name: string) => this._utils.splitName(name)

  selectUser(user: UserTypes) { this.email = user.email }

  authenticate() {
    let errorEmail = this._ToValidateInput.validateInput(this.email, 'email')
    let errorPassword = this._ToValidateInput.validateInput(this.email, 'password')

    if (this.email === '' || this.password === '') {
      this.errors.set('Preencha todos os campos!')

    } else {
      this.errors.set('')

      if (!errorEmail) {
        this.errors.set('Email inválido!')

      } else if (!errorPassword) {
        this.errors.set('Password invalida!')

      } else {
        this._Userservices.todoLogin(this.email, this.password).subscribe(
          data => {
            if (typeof (data) === 'string') {
              this.errors.set(data)

            } else {
              this._LocalStrorage.saveStorage('activeUser', `${data.email}`)
              this._router.navigate(['layout'])
            }
          }
        )
      }
    }
  }
}

