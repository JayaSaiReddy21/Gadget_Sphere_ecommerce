import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HardcoreAuthenticationService } from '../../../services/hardcore-authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
isProductListClicked : boolean=false;
isAccountListClicked : boolean= false;
isSoldListClicked : boolean=false;
isHelpClicked: boolean=false;

adminName: any;
  
constructor(private router : Router,
  private route:ActivatedRoute,
  private hardcode: HardcoreAuthenticationService){
}

ngOnInit(): void {
  
  this.route.params.subscribe(params => {
    this.adminName = params['adminName'];
  });
}


soldProductClicked() {
  this.isSoldListClicked=true;
  }
  accountListClicked() {
  this.isAccountListClicked=true;
  }
  productListClicked() {
    this.isProductListClicked=true;
  }
  helpClicked() {
    this.isHelpClicked=true;
  }

  


  logout(): void {
    localStorage.removeItem('username');
    this.router.navigate(['/index']);
  }

}
