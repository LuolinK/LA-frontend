import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';




@Component({
  selector: 'app-update_suppliers',
  templateUrl: './update_suppliers.component.html',
  styleUrls: ['./update_suppliers.component.css']
})
export class Update_suppliersComponent implements OnInit {
  dates: string[] = [];

  constructor() { }

  ngOnInit() {
    const datePipe = new DatePipe('en-US');
    const currentDate = new Date();
    
    for (let i = 0; i < 365; i++) { // Adjust the number of days as needed
      const date = new Date(currentDate.getTime() + i * 24 * 60 * 60 * 1000);
      const formattedDate = datePipe.transform(date, 'yyyy/MM/dd') || '';
      this.dates.push(formattedDate);
    }

  }
}
