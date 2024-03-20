import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css'
})
export class SurveyComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(private surveyService:SurveyService) { }

}
