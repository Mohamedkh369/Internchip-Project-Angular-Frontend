import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {KeycloakService} from "keycloak-angular";
import {LoginRequest} from "../model/loginRequest";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  loginRequest : LoginRequest = new LoginRequest();

  constructor(private fb  : FormBuilder , private authService: AuthService , private router : Router,
              private keycloak : KeycloakService) {
  }


  ngOnInit() {
    this.loginForm =  this.fb.group({
      username : this.fb.control(''),
      password  : this.fb.control(''),
    }) ;
  }

  login() {
    this.loginRequest.username = this.loginForm.value.username;
    this.loginRequest.password = this.loginForm.value.password;

    this.authService.login(this.loginRequest) ;
  }









}
