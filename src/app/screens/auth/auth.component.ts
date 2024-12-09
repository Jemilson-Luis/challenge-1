import { LocalStorageService } from '../../services/local-storage.service';
import { Router, RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})

export class AuthComponent implements OnInit{
  constructor(
    private _LocalStorage:LocalStorageService,
    private _Router: Router
  ){}

  ngOnInit(): void {
    let haveStorage = this._LocalStorage.getStorage('activeUser')
    if(haveStorage != undefined){
      this._Router.navigate(['layout'])
    }
  }
}
