import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';
import { Router } from '@angular/router';
import { User } from '../userregistration/user';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent implements OnInit {
  emailValid: boolean = true;
  emailIdValid : boolean =true;
  // isEmailIdValid: boolean=true;

  isPasswordValid: boolean = true;  
  userEmailId: string = "";
  userPassword : any;
   
  user!: User;
  confirmpassword: any;

    constructor(private userdataService: UserdataService, 
      private router: Router) { }

    ngOnInit(): void {
  
    }
    
    updatepass() {
      console.log("11111" + this.userEmailId);
      if (this.userEmailId) { // Check if userEmailId is present
        this.userdataService.findByEmailId(this.userEmailId).subscribe(
          Response => {
            this.user = Response;
            console.log(Response);
            if (Response != null) {
              if (this.confirmpassword == this.userPassword) {
                this.userdataService.updateNewPassByMail(this.userEmailId, this.userPassword, this.user).subscribe(
                  Response => {
                    console.log(Response);
                    alert("Password Changed Successfully");
                    this.router.navigate(['userlogin']);
                  },
                  error => {
                    console.error(error);
                    alert("An error occurred while changing the password. Please try again later.");
                  }
                );
              } else {
                alert("Password And Confirm Password Does Not Match");
              }
            } else {
              alert("Email not found. Please register.");
              
            }
          },
          error => {
            console.error(error);
            alert("An error occurred while fetching user data. Please try again later.");
          }
        );
      } else {
        alert("Please provide a valid email address.");
      }
    }
    
    
  

    passwordValid(event: any) {
      event.target.value = event.target.value.trim();
      var passwordValid = event.target.value
      this.isPasswordValid = passwordValid.match("^[a-zA-Z0-9.-]+[@||&|%|*|$|-][a-zA-Z0-9-]{2,5}$") ? true : false
      console.log(this.passwordValid)
    }

    isEmailIdValid(event: any) {
      event.target.value = event.target.value.trim();
      var emailId = event.target.value
      this.emailValid = emailId.match("^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\\.[a-zA-Z.]{2,4}$") ? true : false
      console.log(this.emailValid)  
      }
   }