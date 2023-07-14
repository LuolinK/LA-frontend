import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AccountService } from './service';
import { User } from './model';
import { Router } from '@angular/router';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  hamburger_toggled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  hamburger_toggled: boolean;
  title = 'front-end';
hamburgerVisible$: Observable<boolean>;
  
  constructor(
    private accountService: AccountService,
    private router: Router
    ) { 
      this.hamburgerVisible$ = accountService.user.pipe(map((value: User | null) => {
        if(value === null) {
          return false;
        } else {
          return true;
        }
      }
      ),);
    this.hamburger_toggled$.subscribe((toggled: boolean) => {
      this.hamburger_toggled = toggled;
      if(toggled) {
        (document.getElementsByClassName("container") as HTMLCollectionOf<HTMLElement>).item(0)!.style.gridTemplateColumns= "200px 1fr 0px";

      }else {
        if((document.getElementsByClassName("container") as HTMLCollectionOf<HTMLElement>).item(0)!) {
        (document.getElementsByClassName("container") as HTMLCollectionOf<HTMLElement>).item(0)!.style.gridTemplateColumns= "100px 1fr 0px";
        }

      }
    })
  }
  
  public menuButtonCall(){  
  }
  toggleCollapse(): void {
    this.hamburger_toggled$.next(!this.hamburger_toggled);
  }

  logout() {
    this.accountService.logout();
  }

  shouldShowHamburger(): boolean {
    // Modify the condition based on your application's route configuration
    return !this.router.url.includes('login') && !this.router.url.includes('registration');
  }
}



