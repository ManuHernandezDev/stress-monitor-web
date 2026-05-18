import { Routes } from '@angular/router';

import { LoginComponent }
  from './features/auth/login/login';

import { Home }
  from './features/dashboard/home/home';

import { Evaluation }
  from './features/evaluation/evaluation/evaluation';

import { Sos }
  from './features/sos/sos/sos';

import { Admin }
  from './features/admin/admin/admin';

import { MainLayout }
  from './layout/main-layout/main-layout';

import { authGuard }
  from './core/guards/auth-guard';

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
    path: '',

    component: MainLayout,

    canActivate: [

      authGuard
    ],

    children: [

      {
        path: 'dashboard',

        component: Home
      },

      {
        path: 'evaluation',

        component: Evaluation
      },

      {
        path: 'sos',

        component: Sos
      },

      {
        path: 'admin',

        component: Admin
      }
    ]
  }
];
