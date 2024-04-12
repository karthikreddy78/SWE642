import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';
import { InfoComponent } from './info/info.component';
import { ViewSurveysComponent } from './view-surveys/view-surveys.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'view-surveys', component:ViewSurveysComponent},
  {path:'add-survey', component:SurveyComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
