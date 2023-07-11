import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginDashboardComponent } from './login-dashboard/login-dashboard.component';
import { TodoComponent } from './todo/todo.component';
import { SignupDashboardComponent } from './signup-dashboard/signup-dashboard.component';

//routes
const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:"full"},
  {path:'login', component:LoginDashboardComponent},
  {path:'signup', component:SignupDashboardComponent},
  {path:'home', component:TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
