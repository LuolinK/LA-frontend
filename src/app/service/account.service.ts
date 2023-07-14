// ./services/account.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './../model/user';
import { LoginResult } from './../model/login_result';

function isJsonString(str: string): boolean {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

@Injectable({ providedIn: 'root' })
export class AccountService {
  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    const userString: string | null = localStorage.getItem('user');
    const user: User | null = userString && isJsonString(userString) ? JSON.parse(userString) : null;

    this.userSubject = new BehaviorSubject<User | null>(user);
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User | null {
    return this.userSubject.value;
  }

  login(userName: string, passWord: string): Observable<boolean> {
    return this.http.post<LoginResult>('http://localhost:3000/login', { userName, passWord })
      .pipe(map(result => {
        console.log(result);
        if (result.message === 'Login successful') {
          const userString: string = JSON.stringify(result.user);
          localStorage.setItem('user', userString);
          this.userSubject.next(result.user);
          return true;
        } else {
          return false;
        }
      }));
  }
  
  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }
}