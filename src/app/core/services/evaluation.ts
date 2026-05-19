import { Injectable }
  from '@angular/core';

import { HttpClient }
  from '@angular/common/http';

import { Observable }
  from 'rxjs';

import { EvaluationRequest }
  from '../models/evaluation/evaluation-request.model';

import { EvaluationResponse }
  from '../models/evaluation/evaluation-response.model';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  private apiUrl =
    'http://localhost:8080/evaluation';

  constructor(
    private http: HttpClient
  ) {}

  submitEvaluation(

    request: EvaluationRequest

  ): Observable<EvaluationResponse> {

    return this.http.post<EvaluationResponse>(

      this.apiUrl,

      request
    );
  }
}
