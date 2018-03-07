import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from "../services/index";
@Component({
  selector: 'japp-profile',
  templateUrl: './profile.component.html',
  styleUrls: []
})
export class ProfileComponent
{
  currentUser;
  
  constructor(private LoginService: LoginService, private router: Router) {
      this.currentUser = JSON.parse(localStorage.getItem('authorizedUser'));
  }
  ngOnInit() {
  }
}