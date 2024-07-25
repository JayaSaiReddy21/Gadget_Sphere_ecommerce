import { Component, OnInit } from '@angular/core';
import { HardcoreAuthenticationService } from '../../../services/hardcore-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  username!:string; // Initialize with the admin email
  password!:string; // Initialize with the admin password
  errorMessage = 'Invalid Credentials';
  inValidLogic = false;
  name = '';

  constructor(private router: Router, public hardcodeAuthenticationService: HardcoreAuthenticationService) { }

  ngOnInit(): void {
    console.log(this.username);
    console.log(this.password);
  }
  
  handleLogin() {
    if (this.hardcodeAuthenticationService.adminauthenticate(this.username, this.password)) {
      this.inValidLogic = false;
      this.name = this.username;
      this.router.navigate(['adminwelcome', this.name]); // Navigate to admin welcome page
    } else {
      alert("INVALID LOGIN");
      this.inValidLogic = true;
    }
  }

}
