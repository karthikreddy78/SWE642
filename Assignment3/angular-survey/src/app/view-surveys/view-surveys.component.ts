import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { SurveyForm } from '../models/survey-form';

@Component({
  selector: 'app-view-surveys',
  templateUrl: './view-surveys.component.html',
  styleUrl: './view-surveys.component.css'
})
export class ViewSurveysComponent implements OnInit {
  

  public surveys: SurveyForm [] = [];

  constructor(private surveyService:SurveyService) { }
  ngOnInit() {
    this.listSurveys();
  }
  listSurveys() {
    
    this.surveyService.fetchSurveys()
    .subscribe(surveys => this.surveys = surveys);
  }

  




}
