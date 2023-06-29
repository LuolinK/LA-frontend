import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,

  ) { 

  }
  
  ngOnInit() {
       
  }

  navigateToUpdate_suppliers() {
    this.router.navigate(['/update_suppliers']);
  }
  
  navigateToUpdate_dues() {
    this.router.navigate(['/update_dues']);
  }
  
}  
  




