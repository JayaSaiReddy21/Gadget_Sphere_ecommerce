import { Component, Input, OnInit } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-indexnavbar',
  templateUrl: './indexnavbar.component.html',
  styleUrl: './indexnavbar.component.css'
})
export class IndexnavbarComponent implements OnInit{

  userId : any;
  firstName : any;
  userName : any;
  @Input() public userFName: any;
  constructor(private router: Router){}
  
isLoginSuccesfull: boolean = false;


  ngOnInit(): void {
    
     this.userName=sessionStorage.getItem('userName');
     console.log(this.userName);
     if(this.userName != null )
     {
      this.isLoginSuccesfull=true
     }
      
   }

   myProfile()
   {
    this.router.navigate(['myprofile']);
   }

   viewMyOrders() {
    this.router.navigate(['viewmyorders']);
    }

}
