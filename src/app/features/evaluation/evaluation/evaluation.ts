import { Component }
  from '@angular/core';

import { FormsModule }
  from '@angular/forms';

import { CommonModule }
  from '@angular/common';

import { EvaluationService }
  from '../../../core/services/evaluation';

import { EvaluationRequest }
  from '../../../core/models/evaluation/evaluation-request.model';

import { EvaluationResponse }
  from '../../../core/models/evaluation/evaluation-response.model';

import { MatCardModule }
  from '@angular/material/card';

import { MatButtonModule }
  from '@angular/material/button';

@Component({

  selector: 'app-evaluation',

  standalone: true,

  imports: [

    FormsModule,

    CommonModule,

    MatCardModule,

    MatButtonModule
  ],

  templateUrl: './evaluation.html',

  styleUrl: './evaluation.scss'
})
export class EvaluationComponent {

  siscoAnswers: number[] = [];

  mbiAnswers: number[] = [];

  result?: EvaluationResponse;

  constructor(

    private evaluationService:
    EvaluationService

  ) {}

  submitEvaluation(): void {

    const request:
      EvaluationRequest = {

      siscoAnswers:
      this.siscoAnswers,

      mbiAnswers:
      this.mbiAnswers
    };

    this.evaluationService
      .submitEvaluation(request)
      .subscribe({

        next: response => {

          this.result = response;
        },

        error: err => {

          console.error(err);
        }
      });
  }
}
