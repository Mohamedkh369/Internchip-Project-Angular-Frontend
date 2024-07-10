import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Router} from "@angular/router";
import {LoginRequest} from "../model/loginRequest";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private backendUrl = 'http://localhost:8021';
  constructor(private http: HttpClient , private router : Router) {

  }

  login(loginRequest: LoginRequest): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post<{ token: string }>(`${this.backendUrl}/login`, loginRequest, { headers })
      .subscribe({
        next: (data) => {
          localStorage.setItem('token', data.token);
          console.log("Token stored in localStorage:", data.token);
          this.router.navigateByUrl("/admin/dashboard");
        },
        error: err => {
          console.log("There was a problem with auth service method", err);
        }
      });
  }


  logout(): void {
    localStorage.removeItem('token');

    this.router.navigateByUrl('/login');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken():String  | null {
    return localStorage.getItem('token');
  }



  }


