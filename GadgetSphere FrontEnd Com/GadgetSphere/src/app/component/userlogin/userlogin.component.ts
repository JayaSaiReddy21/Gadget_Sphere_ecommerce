import { Component, OnInit } from '@angular/core';
import { HardcoreAuthenticationService } from '../../services/hardcore-authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  userId!: string;
  Email!: string;
  Password!: string;
  mobileNo!: number;
  userFirstName: any;

  constructor(
    private hardcodeAuthenticationService: HardcoreAuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void { }

  handleLogin(): void {
    if (!this.Email || !this.Password) {
      alert("YOU CANNOT LEAVE USERNAME OR PASSWORD AS EMPTY");
      return;
    }

    this.hardcodeAuthenticationService.authenticate(this.Email, this.Password).subscribe(
      (response: any) => {
        if (!response) {
          alert("USERNAME OR PASSWORD IS INCORRECT");
        } else {
          this.userId = response.userId; // Adjust based on actual response structure
          console.log(this.userId);

          this.hardcodeAuthenticationService.getUserById(this.userId).subscribe(
            (data: any) => {
              this.userFirstName = data.firstName;
              console.log(this.userFirstName);
              sessionStorage.setItem('userName', this.userFirstName);

              // Navigate to the showproducts page after setting the session storage
              sessionStorage.setItem('userId', this.userId);
              this.router.navigate(['showproducts', this.userId]);
            },
            (error: any) => {
              console.error('Error fetching user by ID', error);
            }
          );
        }
      },
      (error: any) => {
        console.error('Authentication error', error);
      }
    );
  }

  createAcc(): void {
    console.log('Navigating to create account page');
    this.router.navigate(['createaccount']);
  }
 
}
