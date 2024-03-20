import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit {
  constructor(private surveyService:SurveyService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
