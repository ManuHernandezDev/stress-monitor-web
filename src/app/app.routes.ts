import { Routes } from '@angular/router';

import { LoginComponent }
  from './features/auth/login/login';

import { Home }
  from './features/dashboard/home/home';

import { EvaluationComponent }
  from './features/evaluation/evaluation/evaluation';

import { SosComponent }
  from './features/sos/sos/sos';

import { AdminComponent }
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

        component: EvaluationComponent
      },

      {
        path: 'sos',


        component: SosComponent
      },

      {
        path: 'admin',

        component: AdminComponent
      }
    ]
  }
];
