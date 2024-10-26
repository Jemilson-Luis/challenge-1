import { Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home.screen/home.screen.component';
import { LoginScreenComponent } from './screens/login.screen/login.screen.component';
import { LogginGuard } from './guards/loggin.guard';
import { AddTaskScreenComponent } from './screens/add-task.screen/add-task.screen.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginScreenComponent},
  { path: 'home', component: HomeScreenComponent, canActivate: [LogginGuard] },
  { path: 'newTask', component: AddTaskScreenComponent, canActivate: [LogginGuard] },
  { path: 'updateTask/:id', component: AddTaskScreenComponent, canActivate: [LogginGuard] },
  {path: '**', redirectTo: 'login'}
];
