import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '../service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { error } from 'jquery';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css',],
  })

export class LoginComponent implements OnInit {

    loading = false;
    submitted = false;
loginform: FormGroup<any> = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
});
errorHidden: boolean = true;


    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) { 
    
    }

    ngOnInit() {
       
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginform.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.loginform.invalid) {
            return;
        }
        this.loading = true;
        this.accountService.login(this.f['username'].value, this.f['password'].value)
            .pipe(first())
            .subscribe(  {
                next: (result) => {
                    console.log(50);
                    console.log(result);
                    if(result) {
                        console.log("result is true")
                        
                        
                    
                    this.errorHidden =true;
                    } else {
                        console.log("naviage to....")
                        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
                        this.router.navigate(['/home_page']));
                        this.loading = false;
                    console.log(59);
                    this.errorHidden =false;
                    }
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }
}   