import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginUsersService {

  constructor() { }

  private users: { email: string, password: string }[] = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
    { email: 'user3@example.com', password: 'password3' }
  ];
  //login Services
  validateCredentials(email: string, password: string): Observable<boolean> {
    const user = this.users.find(u => u.email === email && u.password === password);
    const isValid = !!user; 
    return of(isValid);
  }
  //login services
  getUsers(): { email: string, password: string }[] {
    return this.users;
  }

  //register services
  addNewUsers(email: string, password: string){
    this.users.push({email, password});
    console.log(this.users);
  }
  //register services
  checkIfUserExists(email: string, password: string){
    const userExists = this.users.find(u => u.email === email);
    return userExists;
  }
}
