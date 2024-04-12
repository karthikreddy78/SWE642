import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    
  }

  constructor(private surveyService:SurveyService,  private router: Router) { }

  //Navigate to add-survey
  addSurvey(){
    console.log("New survey added");
    
    this.router.navigate(['/add-survey']);
  }

  //Navigate to view-surveys
  listSurveys() {
    this.router.navigate(['/view-surveys']);
  }

}
