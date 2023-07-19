import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginDashboardComponent } from './login-dashboard/login-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SignupDashboardComponent } from './signup-dashboard/signup-dashboard.component';
import {AngularFireModule} from '@angular/fire/compat';
import { HomeComponent } from './home/home.component';
import { TransationItemComponent } from './transation-item/transation-item.component';
import { ApiNewsComponent } from './api-news/api-news.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    LoginPageComponent,
    LoginDashboardComponent,
    SignupPageComponent,
    SignupDashboardComponent,
    HomeComponent,
    TransationItemComponent,
    ApiNewsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDQtNtyVvtKScyBlkYvtfwHpJt3fmi3JAw",
      authDomain: "fir-angular-project-aaf5a.firebaseapp.com",
      projectId: "fir-angular-project-aaf5a",
      storageBucket: "fir-angular-project-aaf5a.appspot.com",
      messagingSenderId: "917528587650",
      appId: "1:917528587650:web:edbc9f63ed6787fc9cf39b",
      measurementId: "G-MDSJH0VH2E"
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
