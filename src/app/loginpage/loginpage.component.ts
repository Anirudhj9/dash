import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginUsersService } from '../login-users.service';
import { Router } from '@angular/router';
import { AuthService } from '../auhservice.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})

export class LoginpageComponent implements OnInit{
  errorMessage = '';
  constructor(private formBuilder: FormBuilder, private router: Router,
     private userService: LoginUsersService, private authService: AuthService){}
  loginForm: FormGroup;
  signIn(): void {
    const returnStatusAuth = this.authService.login(this.loginForm.get('email').value, this.loginForm.get('password').value);
    if(returnStatusAuth.isAuthenticated){
      this.router.navigate(['/']);
    }
    else{
      this.errorMessage = returnStatusAuth.errorMessage;
    }
    /*if (this.loginForm.invalid) {
      return;
    }
    
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.userService.validateCredentials(email, password)
      .subscribe(
        isValid => {
          if (isValid) {
            this.router.navigate(['/']);
          } else {
            this.errorMessage = 'Invalid username or password.';
          }
        },
        error => {
          console.error(error);
          this.errorMessage = 'An error occurred during login.';
        }
      );*/
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
}