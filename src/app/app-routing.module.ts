import { EditPersonComponent } from './edit-person/edit-person.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { AllPersonComponent } from './all-person/all-person.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { Error404Component } from './error404/error404.component';
import { DashboardGuard } from './Guards/dashboard.guard';
import { LoginGuard } from './Guards/login.guard';

const routes: Routes = [
  {
    path : '',
    component : LoginComponent,
    canActivate : [LoginGuard]
  },
  {
    path : 'register',
    component : RegistrationComponent,
    canActivate : [LoginGuard]
  },
  {
    path :'all',
    component : AllPersonComponent,
    canActivate : [DashboardGuard]
  },
  {
    path : 'addPerson',
    component : AddPersonComponent,
    canActivate : [DashboardGuard]
  },
  {
    path : 'edit/:userEmail',
    component : EditPersonComponent,
    canActivate : [DashboardGuard]
  },
  {
    path : '**',
    component : Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
