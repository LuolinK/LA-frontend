
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Update_suppliersComponent } from './update_suppliers/update_suppliers.component';
import { Update_duesComponent } from './update_dues/update_dues.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '',   redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home_page', component: HomePageComponent},
  {path: 'update_dues', component: Update_duesComponent},
  {path: 'update_suppliers', component: Update_suppliersComponent},
];




@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, ReactiveFormsModule,    CommonModule,  ],
  exports: [RouterModule, ReactiveFormsModule,]
})
export class AppRoutingModule { }