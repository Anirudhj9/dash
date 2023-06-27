import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auhservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent implements OnInit{
  isAuthenticated: boolean | undefined;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.getIsAuthenticated();
  }
}