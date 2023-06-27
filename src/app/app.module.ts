import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterConfigOptions, provideRouter, RouterModule } from '@angular/router';
import { HomePageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { LoginUsersService } from './login-users.service';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  { path: 'login', component: LoginpageComponent },
  { path: 'register', component: RegistrationpageComponent },
  { path: 'about', component: AboutpageComponent },
];

export const routerProviders = [
  provideRouter(routes)
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginpageComponent,
    RegistrationpageComponent,
    HomePageComponent,
    AboutpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { } 
