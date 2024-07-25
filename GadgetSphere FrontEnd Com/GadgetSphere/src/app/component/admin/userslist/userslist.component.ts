import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../../../services/userdata.service';


@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrl: './userslist.component.css'
})
export class UserslistComponent implements OnInit {
  accounts: Accounts[] = []
  p:number=1;
  count:number=5;

  b: any;
  name!: string;
  constructor(private userdataService: UserdataService) { }
  ngOnInit(): void {
    // this.name = this.route.snapshot.params['name'];
    // console.log('inside the onginit')
    this.userdataService.getallaccounts().subscribe(Response => { this.accounts = Response })
  } //end of ng


  //delete acc
  deleteacc(userId: number) {

    this.b = confirm("DO YOU WANT TO DELETE FOR SURE!!!")
    if (this.b == true) {
      this.userdataService.deleteaccbyid(userId).subscribe(
        Response => {
          this.accounts = Response
          console.log(Response)
          alert("Selected Record Is Deleted")
        })
    }
    else {
      alert("You decided not to delete")
    }
  }
  // back() {
  //   this.router.navigate(['adminwelcome', this.name])
  // }
}
export class Accounts {

  constructor(

    public userId: number,
    public firstName :String,
    public lastName :String,
    public mobileNo : Number,
    public emailId :String,
    public  password: String,
    public accountCreatedDate: Date
  ) { }
}
