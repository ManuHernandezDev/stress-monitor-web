import { Routes } from '@angular/router';

import { LoginComponent } from './features/auth/login/login';

import { Home } from './features/dashboard/home/home';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'dashboard',
    component: Home
  }
];
