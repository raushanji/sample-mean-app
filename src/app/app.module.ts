import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddPersonComponent } from './add-person/add-person.component';
import { AllPersonComponent } from './all-person/all-person.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { Error404Component } from './error404/error404.component';

import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    AllPersonComponent,
    LoginComponent,
    RegistrationComponent,
    EditPersonComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Enabling reactive forms
    FormsModule,
    ReactiveFormsModule,

    // HTTP Module
    HttpClientModule,

    // Mat SnackBar
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
