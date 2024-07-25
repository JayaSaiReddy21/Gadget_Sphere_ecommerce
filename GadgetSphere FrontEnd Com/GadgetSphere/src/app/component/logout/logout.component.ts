import { Component, OnInit } from '@angular/core';
import { HardcoreAuthenticationService } from '../../services/hardcore-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {

  constructor(public hardcodeAuthenticationService: HardcoreAuthenticationService, 
    private router: Router) { }
  ngOnInit(): void {
    alert("Are You Sure")
    
    this.hardcodeAuthenticationService.logout();
    this.router.navigate(['index'])

    
  }
}