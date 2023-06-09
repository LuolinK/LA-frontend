import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- Import the FormsModule
import { CommonModule, NgIf } from '@angular/common';
import { Router } from 'express';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    NgIf,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '',   redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'landing-page', component: LandingPageComponent},
    ]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule // <-- Add this line // <-- Add the FormsModule to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule,RouterModule, ReactiveFormsModule,],
})
export class AppModule { }
