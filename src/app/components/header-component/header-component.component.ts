import { Component } from '@angular/core';
import { UsersServicesService } from '../../services/users.services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.scss'
})
export class HeaderComponentComponent {
  constructor(private _UsersServices:UsersServicesService, private router:Router) {}

  loggOut(){
    this._UsersServices.loggOut()
    this.router.navigate(['/login'])
  }
}
