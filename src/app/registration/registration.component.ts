import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  customer = {
    name: '',
    contact: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  goToRegistration() {
    this.router.navigate(['/registration']);
  }

  registerAccount() {
    // Perform registration logic here
    console.log(this.customer);
    // You can send the form data to a backend server for further processing
    // using HTTP requests (e.g., Angular's HttpClient)
  }
}


