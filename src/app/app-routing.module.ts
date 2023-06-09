import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '',   redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'landing-page', component: LandingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, ReactiveFormsModule,    CommonModule,  ],
  exports: [RouterModule, ReactiveFormsModule,]
})
export class AppRoutingModule { }