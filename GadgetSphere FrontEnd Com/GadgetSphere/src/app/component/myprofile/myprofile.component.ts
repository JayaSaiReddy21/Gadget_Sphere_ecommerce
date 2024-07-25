import { Component, OnInit } from '@angular/core';
import { ProfileDetails } from './myprofile';
import { UserdataService } from '../../services/userdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HardcoreAuthenticationService } from '../../services/hardcore-authentication.service';
import { User } from '../userregistration/user';
import { OrderService } from '../../services/order.service';
import { OrderData } from '../order/order';
import { response } from 'express';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrl: './myprofile.component.css'
})
export class MyprofileComponent implements OnInit {
  userId!: any;
  profileDetails!: ProfileDetails;
  user!: User;
  comfirmPassword!: string;
  isMobileValid: Boolean = true;
  isPasswordValid: Boolean = true;
  isAddressValid: Boolean = true;
  order = new OrderData(0,0,0,0,'',0,'',0,'','','','','pending','',0);


  constructor(private userdataService: UserdataService, 
  private activatedRoute: ActivatedRoute, 
  private router: Router, 
  public hardcodeAuthenticationService: HardcoreAuthenticationService,
  private orderService:OrderService) { }

  ngOnInit(): void {

    this.userId =sessionStorage.getItem('userId');
    this.userdataService.findUserById(this.userId).subscribe(
      Response => 
      {
         this.user = Response });

        this.orderService.findUserById(this.userId).subscribe(
          (Response:any) => {
            this.order=Response;
          }
        )
  }





  // update(accountEmail: string, password: string) {

  //   if (this.comfirmPassword == password) {
  //     this.userdataService.updatebyid(accountEmail, this.profileDetails).subscribe(
  //       Response => { this.router.navigate(['dashboard', this.userId]) }
  //     )
  //   } else {
  //     alert("PASSWORD DOES NOT MATCH CONFIRM PASSWORD")
  //   }

  // }

  mobileValid(event: any) {
    event.target.value = event.target.value.trim();
    var mobile = event.target.value
    let m = mobile.split("");
    console.log(m)
    let n = new Set(m);
    console.log(new Set(m));
    console.log(n.size)
  }

  //   this.isMobileValid = mobile.match(/^(0|91)?[6-9][0-9]{9}$/) && n.size > 2 ? true : false
  //   console.log(this.isMobileValid)
  // }

  // addressValid(event: any) {
  //   event.target.value = event.target.value.trim().length > 0 ? event.target.value : event.target.value.trim();
  //   var add = event.target.value
  //   this.isAddressValid = add.match("^[a-zA-Z0-9.,_-]{15,50}$") ? true : false
  //   console.log(this.addressValid)
  // }

  // passwordValid(event: any) {
  //   event.target.value = event.target.value.trim();
  //   var pass = event.target.value
  //   this.isPasswordValid = pass.match("^[a-zA-Z0-9._-]+[@|_|&|%|*|$|-][a-zA-Z0-9-]{2,5}$") ? true : false
  //   console.log(this.passwordValid)
  // }
  

}