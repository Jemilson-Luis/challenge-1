import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ValidateInputService {
  private email = {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email inválido'
  }

  validateInput(value:string, type:string){
    if(type === 'email'){
      const result = this.email.regex.test(value)
      return result

    }else{
      return value.length > 4
    }
  }
}
