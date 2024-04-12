import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SurveyForm } from '../models/survey-form';
import { SurveyService } from '../survey.service';
import { log } from 'node:console';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {

  survey: SurveyForm;
  interested: string[] = ['Friends', 'Television', 'Internet', 'Other'];
  likedMost: any;

  likelihoodValues = ['Very Likely', 'Likely', 'Not Likely'];
  likelihood: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) data: any, private surveyService: SurveyService) {
    console.log(data.survey);
    this.survey = data.survey;
    this.survey.likedMost = JSON.parse(this.survey.likedMost);
    this.likedMost = this.survey.likedMost;
     }
  ngOnInit(): void {
    console.log(this.survey);

  }

  //Edit the survey
  onSubmit() {
    this.survey.likedMost = JSON.stringify(this.likedMost);
    console.log(this.survey.likedMost);
    console.log(this.survey);
    this.updateSurvey();
  }

  updateSurvey() {
    this.surveyService.createSurvey(this.survey).subscribe(data => {
      console.log(data);
    },
      error => console.log(error));

    alert("Response Successfully Updated");
  }

  displayErrorMessage(input: any) {
    
    if (input.control.hasError('required')) {

    } else {
      input.control.markAsTouched();
    }
  }

  onCancel() {
    window.location.reload();

  }


}
