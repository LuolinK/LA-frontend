import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- Import the FormsModule
import { CommonModule, NgIf } from '@angular/common';
import { Router } from 'express';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Update_suppliersComponent } from './update_suppliers/update_suppliers.component';
import { Update_duesComponent } from './update_dues/update_dues.component';
import { RegistrationComponent } from './registration/registration.component';



@NgModule({
  declarations: [					
    AppComponent,
    LoginComponent,
    HomePageComponent,
    Update_suppliersComponent,
    Update_duesComponent,
    RegistrationComponent,
  
   ],
  imports: [
    AppRoutingModule,
    FormsModule,
    NgIf,
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '',   redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      
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
