import { Routes } from '@angular/router';

import { LoginScreenComponent } from './screens/auth/login.screen/login.screen.component';
import { HomeScreenComponent } from './screens/layouts/home.screen/home.screen.component';
import { LayoutsComponent } from './screens/layouts/layouts.component';
import { AuthComponent } from './screens/auth/auth.component';
import { authenticatedGuard } from './_guards/authenticated.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  
  {
    path: 'auth', component: AuthComponent, children: [
      { path: '', component: LoginScreenComponent },
    ]
  },
  
  {
    path: 'layout', component: LayoutsComponent, children: [
      { path: '', component: HomeScreenComponent},
    ],
    canActivate: [authenticatedGuard],
  },
  
  {path: '**', redirectTo: 'auth' },
];
