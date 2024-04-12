import { Component, Inject, OnInit } from '@angular/core';

import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SurveyForm } from '../models/survey-form';
import { SurveyService } from '../survey.service';
import { log } from 'node:console';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit{

  survey: SurveyForm;
  interested: string[] = ['Friends', 'Television', 'Internet', 'Other'];

  //likedMost: string[] = ['Students', 'Location', 'Campus', 'Atmosphere', 'Dorm rooms', 'Sports'];
  likedMost : any;

  // Method to convert checkbox data to JSON
  getCheckboxDataAsJson() {
    return JSON.stringify(this.likedMost);
  }
  selectedOptions: {[key: string]: boolean} = {};
  likelihoodValues = [ 'Very Likely', 'Likely', 'Not Likely'];
    // Example select options
  likelihood: string = '';
Object: any;

  constructor(@Inject(MAT_DIALOG_DATA) data:any, private surveyService:SurveyService) {
    console.log(data.survey);
    this.survey = data.survey;
    this.survey.likedMost = JSON.parse(this.survey.likedMost);
    this.likedMost = this.survey.likedMost;
    /*
    this.survey = {
      id : data.id,
      firstName : data.firstName,
      lastName : data.lastName,
      streetAddress : data.streetAddress,
      city : data.city,
      state : data.state,
      zip : data.zip,
      telephoneNumber : data.telephoneNumber,
      email : data.email,
      dateOfSurvey : data.dateOfSurvey,
      likedMost : data.likedMost,
      interestedMost : data.interestedMost,
      likelihood : data.likelihood,
      additionalComments : data.additionalComments
    }
    */
    console.log("Yo", this.survey);
    console.log("Checkboxes", this.survey.likedMost);
    this.survey.likedMost.forEach((key: any) => { console.log(key.label, key.checked===true);
    
      
    });
    
    //var checkboxValues = this.survey.likedMost.split(',');
    //console.log(checkboxValues);
    
    
  }
  ngOnInit(): void {
    console.log(this.survey);
    
  }

  onSubmit() {
    //console.log(survey);

   // this.survey.likedMost = Object.keys(this.selectedOptions).filter(option => this.selectedOptions[option]).join(',');
    
console.log("Hi");

this.survey.likedMost = JSON.stringify(this.likedMost);
console.log(this.survey.likedMost);
    console.log(this.survey);
    this.updateSurvey();
  }

  updateSurvey() {
    this.surveyService.createSurvey(this.survey).subscribe( data =>{
      console.log(data);
      //this.goToSurveyList();
    },
    error => console.log(error));
    
    alert("Response Successfully Updated");
  }

  displayErrorMessage(input: any) {
    // Mark the input as touched to display error message
    if (input.control.hasError('required')) {
      
    } else {
      input.control.markAsTouched();
    }
  }

  onCancel() {
    window.location.reload();

  }


}
