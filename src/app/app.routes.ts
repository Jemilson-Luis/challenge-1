import { Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home.screen/home.screen.component';
import { LoginScreenComponent } from './screens/login.screen/login.screen.component';
import { LogginGuard } from './guards/loggin.guard';
import { LoggOutGuard } from './guards/loggout.guard';


export const routes: Routes = [
  { path: '', component: LoginScreenComponent, canActivate: [LoggOutGuard] },
  { path: 'home', component: HomeScreenComponent, canActivate: [LogginGuard] }
];
