import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private surveyService:SurveyService) { }

}
