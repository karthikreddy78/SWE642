import { Component } from '@angular/core';

import { FormData } from '../models/form-data';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrl: './sample-form.component.css'
})
export class SampleFormComponent {
  formData: FormData = {
    firstName : 'John', // Example existing value
    lastName: 'Doe',   // Example existing value
    email: 'john@example.com', // Example existing value
    // Add other fields and set their existing values here
  };

  onSubmit(form:any) {
    console.log(this.formData);
    // Add logic to submit form data
  }
}
