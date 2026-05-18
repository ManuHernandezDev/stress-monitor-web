import { Routes } from '@angular/router';

import { Login } from './features/auth/login/login';

import { Home } from './features/dashboard/home/home';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'dashboard',
    component: Home
  }
];
