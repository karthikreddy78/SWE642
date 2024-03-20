import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { SurveyComponent } from './survey/survey.component';
import { ViewSurveysComponent } from './view-surveys/view-surveys.component';
import { HomeComponent } from './home/home.component';
import { SurveyService } from './survey.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    SurveyComponent,
    ViewSurveysComponent,
    HomeComponent,
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    SurveyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
