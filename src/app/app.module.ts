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
import { CurrencyConvertorComponent } from './currency-convertor/currency-convertor.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { RecentActivitiesComponent } from './recent-activities/recent-activities.component';
import { BankingServicesComponent } from './banking-services/banking-services.component';
import { CurrencyConverterDashboardComponent } from './currency-converter-dashboard/currency-converter-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { SearchAccountComponent } from './search-account/search-account.component';
import { DepositDashboardComponent } from './deposit-dashboard/deposit-dashboard.component';
import { WithdrawDashboardComponent } from './withdraw-dashboard/withdraw-dashboard.component';
import { CloseDashboardComponent } from './close-dashboard/close-dashboard.component';
import { GetTransactionsComponent } from './get-transactions/get-transactions.component';

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
    CurrencyConvertorComponent,
    CreateAccountComponent,
    RecentActivitiesComponent,
    BankingServicesComponent,
    CurrencyConverterDashboardComponent,
    NavbarComponent,
    UpdateAccountComponent,
    SearchAccountComponent,
    DepositDashboardComponent,
    WithdrawDashboardComponent,
    CloseDashboardComponent,
    GetTransactionsComponent,
    
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
