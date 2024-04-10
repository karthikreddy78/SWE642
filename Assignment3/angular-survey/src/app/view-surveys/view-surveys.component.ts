import { Component, OnInit, ViewChild } from '@angular/core';
import { SurveyService } from '../survey.service';
import { SurveyForm } from '../models/survey-form';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { ModalComponent } from '../modal/modal.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-view-surveys',
  templateUrl: './view-surveys.component.html',
  styleUrl: './view-surveys.component.css'
})
export class ViewSurveysComponent implements OnInit {
 

  public surveys: SurveyForm [] = [];

  constructor(private surveyService:SurveyService, private route: ActivatedRoute, private router: Router, private dialog:MatDialog) { 
    //this.listSurveys();

    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
   }

   this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
         // trick the Router into believing it's last link wasn't previously loaded
         this.router.navigated = false;
         // if you need to scroll back to top, here is the right place
         this.listSurveys();
         window.scrollTo(0, 0);
      }
  });
  }

  ngOnInit(): void {
    
  }

  listSurveys() {
    
    this.surveyService.fetchSurveys()
    .subscribe(surveys => this.surveys = surveys);

    console.log(this.surveys);
  }

  updateRecord(survey: SurveyForm) {
    console.log(survey);
    let d=this.dialog.open(ModalComponent,{height:'600px',width:'600px',data:{survey}});
      d.afterClosed().subscribe(data => {
        
        console.log(data);
        window.location.reload()
        
      })
  }
  deleteRecord(survey: SurveyForm) {


    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        Swal.fire(
          'Deleted!',
          'Survey Record has been deleted.',
          'success'
        )
        this.surveyService.deleteSurvey(survey.id).subscribe(data => {
          console.log(data);
          //this.snack.open("User Registered Successfully", '',{duration:3000});
        
    
          let currentUrl = this.router.url;
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.onSameUrlNavigation = 'reload';
            this.router.navigate([currentUrl]);
        }, err => {
    
          Swal.fire("Unexpected error occurred")
          console.log(err);
        })
      }
    })
  
  }
  

  

  
  




}
