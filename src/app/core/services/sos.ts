import { Injectable }
  from '@angular/core';

import { HttpClient }
  from '@angular/common/http';

import { Observable }
  from 'rxjs';

import { EmergencyContactRequest }
  from '../models/sos/emergency-contact-request.model';

@Injectable({
  providedIn: 'root'
})
export class SosService {

  private apiUrl =
    'http://localhost:8080/sos';

  constructor(
    private http: HttpClient
  ) {}

  registerContact(

    request:
    EmergencyContactRequest

  ): Observable<string> {

    return this.http.post(

      `${this.apiUrl}/contacts`,

      request,

      {
        responseType: 'text'
      }
    );
  }

  sendPanicAlert():
    Observable<string> {

    return this.http.post(

      `${this.apiUrl}/panic`,

      {},

      {
        responseType: 'text'
      }
    );
  }
}
