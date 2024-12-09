import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import UserTypes from '../../types/databaseUser.types';

import { UsersServicesService } from '../../services/users.services.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.scss'
})

export class HeaderComponentComponent implements OnInit {
  activeUser: UserTypes = { email: '', id: '', name: '', password: '' }
  protected _utils = new Utils
  nameSplited: string = ''

  constructor(
    private _UsersServices: UsersServicesService,
    private _LocalStorage: LocalStorageService,
    private Router: Router
  ) { }

  ngOnInit(): void {
    let userActive = this._LocalStorage.getStorage('activeUser')
    if (userActive != null) {
      this._UsersServices.findOne(userActive).subscribe(
        data => {
          this.activeUser = data[0]
          this.nameSplited = this._utils.splitName(this.activeUser.name)
        }
      )
    } else this.Router.navigate(['auth'])
  }


  logOut() {
    this._UsersServices.loggOut()
  }
}
