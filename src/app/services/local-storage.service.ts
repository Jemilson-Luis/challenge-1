import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  getStorage(key:string){
    return localStorage.getItem(key)
  }

  saveStorage(key:string, value:string){
    localStorage.setItem(key, value)
  }
}
