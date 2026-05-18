import { Component } from '@angular/core';
import { RouterOutlet }
  from '@angular/router';

import { MatSidenavModule }
  from '@angular/material/sidenav';

import { Navbar }
  from '../navbar/navbar';

import { Sidebar }
  from '../sidebar/sidebar';
@Component({
  selector: 'app-main-layout',
  imports: [

    RouterOutlet,

    MatSidenavModule,

    Navbar,

    Sidebar
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
  standalone: true
})
export class MainLayout {

}
