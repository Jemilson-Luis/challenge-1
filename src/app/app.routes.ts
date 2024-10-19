import { Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home.screen/home.screen.component';
import { LoginScreenComponent } from './screens/login.screen/login.screen.component';


export const routes: Routes = [
  { path: '', component: LoginScreenComponent },
  { path: 'home', component: HomeScreenComponent }
];
