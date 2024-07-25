import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { ProductsInformation } from '../../showproducts/showproducts.component';
import { OrderData } from '../../order/order';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-soldproducts',
  templateUrl: './soldproducts.component.html',
  styleUrl: './soldproducts.component.css'
})
export class SoldproductsComponent implements OnInit {
  userId!: number;
  //product: ProductsInformation[] = [];
  orderData : OrderData[]=[];

  p:number=1;
  count:number=5;
  

  constructor(
     private route: ActivatedRoute, 
    private router: Router, 
    private orderService: OrderService) { }

  ngOnInit(): void {
    //this.firstName = this.route.snapshot.params['firstName']
    this.orderService.listOfSoldProduct().subscribe(
      Response => {
        console.log("111111111"+this.orderData);
        this.orderData = Response
      }
    )
  }
 
  

}
