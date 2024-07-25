import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserloginComponent } from './component/userlogin/userlogin.component';
import { IndexComponent } from './component/index/index.component';
import { UserregistrationComponent } from './component/userregistration/userregistration.component';
import { BrandsComponent } from './component/brands/brands.component';
import { AdminloginComponent } from './component/admin/adminlogin/adminlogin.component';
import { AdminwelcomeComponent } from './component/admin/adminwelcome/adminwelcome.component';
import { NavbarComponent } from './component/admin/navbar/navbar.component';
import { ProductlistComponent } from './component/admin/productlist/productlist.component';
import { SoldproductsComponent } from './component/admin/soldproducts/soldproducts.component';
import { UserslistComponent } from './component/admin/userslist/userslist.component';
import { AdminfindComponent } from './component/admin/adminfind/adminfind.component';
import { ShowproductsComponent } from './component/showproducts/showproducts.component';
import { BuyComponent } from './component/buy/buy.component';
import { HeroComponent } from './component/hero/hero.component';
import { OrderComponent } from './component/order/order.component';
import { CartComponent } from './component/cart/cart.component';
import { LogoutComponent } from './component/logout/logout.component';
import { PaymentComponent } from './component/payment/payment.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { MyprofileComponent } from './component/myprofile/myprofile.component';
import { ViewmyordersComponent } from './component/viewmyorders/viewmyorders.component';
import { AdminhelpComponent } from './component/admin/adminhelp/adminhelp.component';






const routes: Routes = [{path:"",component:IndexComponent},
  {path:'index',component:IndexComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'userregistration',component:UserregistrationComponent},
  {path:'brands',component:BrandsComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminwelcome',component:AdminwelcomeComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'productlist',component:ProductlistComponent},
  {path:'soldproducts',component:SoldproductsComponent},
  {path:'userslist',component:UserslistComponent},
  {path:'adminfind',component:AdminfindComponent},
  {path:'adminfind/:productId',component:AdminfindComponent},
  {path:'showproducts',component:ShowproductsComponent},
  {path:'showproducts/:userId',component:ShowproductsComponent},
  {path:'adminwelcome/:name',component:AdminwelcomeComponent},
  {path:'buy/:productId',component:BuyComponent},
  {path:'hero',component:HeroComponent},
  {path:'order',component:OrderComponent},
  {path:'order/:productId/:quantity',component:OrderComponent},
  {path:'cart',component:CartComponent},
  {path:'logout',component:LogoutComponent},
  // {path:'payment',component:PaymentComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'myprofile',component:MyprofileComponent},
  {path:'viewmyorders',component:ViewmyordersComponent},
  {path:'adminhelp',component:AdminhelpComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
