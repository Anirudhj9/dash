import { Component, Input, Output, ViewEncapsulation } from '@angular/core';
import { UserList } from './shared/userList.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'Dashboard';
  featureSelected = '';
  public userlist : UserList[];
  public ReturnStatusLogin = '';
  public ReturnStatusRegister = '';

  validateCredentials(data: UserList){ //1=valid cred, 2= invalid pass, 3=invalid email
    var flag = 0;
    for(var i=0;i<this.userlist.length; i++){
      if(data.emailID === this.userlist[i].emailID){
        if(data.password === this.userlist[i].password){
          this.ReturnStatusLogin = 'login successful';
          flag =1;
          break;
        }
        else{
          this.ReturnStatusLogin = 'Invalid Password!';
          flag=2;
          break;
        }
      }
    }
    if(flag === 0){
      this.ReturnStatusLogin = 'Invalid Email ID!';
      flag=3;
    }
  }
  validateNewRegister(data: UserList){
    var flag = 0;
    for(var i=0;i<this.userlist.length; i++){
      if(data.emailID === this.userlist[i].emailID){
          this.ReturnStatusRegister = 'User already exists!';
          flag =1;
          break;
      }
      else{
          this.userlist.push(new UserList(data.emailID, data.password,data.userName));
          this.ReturnStatusRegister = 'Account created successfully!';
          flag=2;
          break;
      }
    }
  }

  onNavigate(data: string){
    this.featureSelected = data;
  }
  
}
