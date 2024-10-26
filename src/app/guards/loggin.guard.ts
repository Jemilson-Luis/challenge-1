import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class LogginGuard implements CanActivate{
  constructor( private router:Router ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    const activeEmail = localStorage.getItem('email')

    if(activeEmail === null) {
      this.router.navigate(['login'])
      return false
      
    }else{

      return true
    }
  }
}
