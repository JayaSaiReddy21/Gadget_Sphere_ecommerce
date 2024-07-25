import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './component/index/index.component';
import { UserloginComponent } from './component/userlogin/userlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserregistrationComponent } from './component/userregistration/userregistration.component';
import { BrandsComponent } from './component/brands/brands.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './component/admin/navbar/navbar.component';
import { AdminloginComponent } from './component/admin/adminlogin/adminlogin.component';
import { AdminwelcomeComponent } from './component/admin/adminwelcome/adminwelcome.component';
import { ProductlistComponent } from './component/admin/productlist/productlist.component';
import { UserslistComponent } from './component/admin/userslist/userslist.component';
import { SoldproductsComponent } from './component/admin/soldproducts/soldproducts.component';
import { AdminfindComponent } from './component/admin/adminfind/adminfind.component';
import { ShowproductsComponent } from './component/showproducts/showproducts.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { IndexnavbarComponent } from './component/indexnavbar/indexnavbar.component';
import { IndexfooterComponent } from './component/indexfooter/indexfooter.component';
import { BuyComponent } from './component/buy/buy.component';
import { HeroComponent } from './component/hero/hero.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CartComponent } from './component/cart/cart.component';
import { LogoutComponent } from './component/logout/logout.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { OrderComponent } from './component/order/order.component';
import {MatCardModule} from '@angular/material/card';
import { PaymentComponent } from './component/payment/payment.component';

import {MatPaginatorModule} from '@angular/material/paginator';
import { GooglePayButtonModule } from "@google-pay/button-angular";
import { MyprofileComponent } from './component/myprofile/myprofile.component';


import { MatTableModule} from '@angular/material/table';

import{MatBadgeModule} from '@angular/material/badge';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatIconModule} from '@angular/material/icon';
import{MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';

import { NgxPaginationModule } from 'ngx-pagination';
import { MatSelectModule } from '@angular/material/select';
import { ViewmyordersComponent } from './component/viewmyorders/viewmyorders.component';
import { CardPaymentDialogComponent } from './component/card-payment-dialog/card-payment-dialog.component';
import { AdminhelpComponent } from './component/admin/adminhelp/adminhelp.component';










@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    UserloginComponent,
    UserregistrationComponent,
    BrandsComponent,
    NavbarComponent,
    AdminloginComponent,
    AdminwelcomeComponent,
    ProductlistComponent,
    UserslistComponent,
    SoldproductsComponent,
    AdminfindComponent,
    ShowproductsComponent,
    ForgotpasswordComponent,
    IndexnavbarComponent,
    IndexfooterComponent,
    BuyComponent,
    HeroComponent,
    CartComponent,
    LogoutComponent,
    OrderComponent,
    PaymentComponent,
    MyprofileComponent,
    ViewmyordersComponent,
    CardPaymentDialogComponent,
    AdminhelpComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatStepperModule,
    MatCardModule,
    MatPaginatorModule,
    GooglePayButtonModule,
    MatTableModule, 
    MatPaginatorModule,

    MatBadgeModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    NgxPaginationModule,

    MatSelectModule,
    MatDialogModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
