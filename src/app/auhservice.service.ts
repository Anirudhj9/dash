import { Injectable } from '@angular/core';
import { LoginUsersService } from './login-users.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  router: any;
  constructor(private userService: LoginUsersService){}
  returnStatus : {errorMessage: string, isAuthenticated: boolean};

  login(email: string, password: string){
    this.userService.validateCredentials(email, password)
      .subscribe(
        isValid => {
          if (isValid) {
            //this.router.navigate(['/']);
            this.returnStatus.isAuthenticated = true;
            this.returnStatus.errorMessage = '';
          } else {
            this.returnStatus.isAuthenticated = false;
            this.returnStatus.errorMessage ='Invalid username or password.';
//            this.errorMessage = 'Invalid username or password.';
          }
        },
        error => {
          console.error(error);
          this.returnStatus.isAuthenticated = false;
          this.returnStatus.errorMessage = 'An error occurred during login.';
          //this.errorMessage = 'An error occurred during login.';
        }
      );
    // Perform authentication logic here (e.g., check username and password against stored credentials)
    // Set the authentication status accordingly
    //this.isAuthenticated = true; // Simulated successful login
    //return this.isAuthenticated;
    return this.returnStatus;
  }

  logout(): void {
    // Perform logout logic here
    this.returnStatus.isAuthenticated = false;
  }

  getIsAuthenticated(): boolean {
    return this.returnStatus.isAuthenticated;
  }
}
