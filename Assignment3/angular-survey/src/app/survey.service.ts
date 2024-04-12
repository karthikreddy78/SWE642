import { Injectable } from '@angular/core';
import { SurveyForm } from './models/survey-form';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../environments/environment';

//Declared the url of Backend in environment.ts
const API_URL = `${environment.BASE_URL}`;

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  //rest call to fetch all surveys from BE
  fetchSurveys(): Observable<SurveyForm[]> {
    return this.http.get<SurveyForm[]>(API_URL+"/findAll").pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error.message || 'Server error');
  }));
}

//Rest call to create survey
  createSurvey(survey:SurveyForm): Observable<any>{
    return this.http.post(API_URL+"/saveSurvey", survey);
  }

  //Rest call to delete survey
  deleteSurvey(id: number): Observable<any>{
    return this.http.delete(API_URL+"/deleteSurvey/"+id);
  }

  //Rest call to update survey
  updateSurvey(survey:SurveyForm): Observable<any>{
    return this.http.post(API_URL+"/editSurvey", survey);
  }
  

}
