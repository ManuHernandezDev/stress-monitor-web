import { Component }
  from '@angular/core';

import { FormsModule }
  from '@angular/forms';

import { CommonModule }
  from '@angular/common';

import { MatCardModule }
  from '@angular/material/card';

import { MatButtonModule }
  from '@angular/material/button';

import { MatInputModule }
  from '@angular/material/input';

import { MatFormFieldModule }
  from '@angular/material/form-field';

import { SosService }
  from '../../../core/services/sos';

import { EmergencyContactRequest }
  from '../../../core/models/sos/emergency-contact-request.model';

@Component({

  selector: 'app-sos',

  standalone: true,

  imports: [

    FormsModule,

    CommonModule,

    MatCardModule,

    MatButtonModule,

    MatInputModule,

    MatFormFieldModule
  ],

  templateUrl: './sos.html',

  styleUrl: './sos.scss'
})
export class SosComponent {

  contact:
    EmergencyContactRequest = {

    name: '',

    phone: '',

    email: ''
  };

  constructor(

    private sosService:
    SosService

  ) {}

  registerContact(): void {

    this.sosService
      .registerContact(this.contact)
      .subscribe({

        next: response => {

          alert(response);
        },

        error: err => {

          console.error(err);
        }
      });
  }

  panic(): void {

    this.sosService
      .sendPanicAlert()
      .subscribe({

        next: response => {

          alert(response);
        },

        error: err => {

          console.error(err);

          alert(
            'Error sending alert'
          );
        }
      });
  }
}
