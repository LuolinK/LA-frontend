import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '../service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loading = false;
  submitted = false;
  loginSuccess = false;
  loginForm: FormGroup = this.formBuilder.group({
    userName: ['', Validators.required],
    passWord: ['', Validators.required]
  });
  errorHidden = true;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    // Initialize logic if needed
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.accountService.login(this.f['userName'].value, this.f['passWord'].value)
      .pipe(first())
      .subscribe({
        next: (result) => {
          if (result) {
            // Navigating to home page if login is successful
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
              this.router.navigate(['/home_page'])
            );
            this.loading = false;
            this.loginSuccess = true;
          } else {
            // Show error message when login failed
            this.errorHidden = false;
            this.loginSuccess = false;
          }
        },
        error: (error) => {
          this.alertService.error(error);
          this.loading = false;
          this.loginSuccess = false;
        }
      });
  }

  navigateToRegistion() {
    this.router.navigate(['/registration']); // replace '/register' with the route to your registration page
  }
}