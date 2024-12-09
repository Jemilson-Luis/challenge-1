import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from "../../components/header-component/header-component.component";
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [RouterOutlet, HeaderComponentComponent],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.scss'
})

export class LayoutsComponent implements OnInit {

  constructor(
    private _LocalStorage: LocalStorageService,
    private _Router: Router
  ) { }

  ngOnInit(): void {
    let haveStorage = this._LocalStorage.getStorage('activeUser')    

    if (haveStorage === undefined || haveStorage === null ) {
      this._Router.navigate(['auth'])
    }
  }
}
