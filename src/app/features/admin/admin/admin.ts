import { Component }
  from '@angular/core';

import { CommonModule }
  from '@angular/common';

import {

  BaseChartDirective

} from 'ng2-charts';

import {

  ChartConfiguration,

  ChartType

} from 'chart.js';

import { MatCardModule }
  from '@angular/material/card';

import { MatButtonModule }
  from '@angular/material/button';

@Component({

  selector: 'app-admin',

  standalone: true,

  imports: [

    CommonModule,

    BaseChartDirective,

    MatCardModule,

    MatButtonModule
  ],

  templateUrl: './admin.html',

  styleUrl: './admin.scss'
})
export class AdminComponent {

  public pieChartType:
    ChartType = 'pie';

  public pieChartData:
    ChartConfiguration<'pie'>['data'] = {

    labels: [

      'Low',

      'Moderate',

      'Critical'
    ],

    datasets: [

      {
        data: [

          12,

          7,

          3
        ]
      }
    ]
  };

  downloadCsv(): void {

    window.open(

      'http://localhost:8080/admin/export/csv',

      '_blank'
    );
  }
}
