import { Component } from '@angular/core';
import { OrderData } from '../order/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-viewmyorders',
  templateUrl: './viewmyorders.component.html',
  styleUrl: './viewmyorders.component.css'
})
export class ViewmyordersComponent {
userId : any;
orderData: OrderData[] = [];

constructor(private orderService: OrderService) { }

ngOnInit(): void {
  this.loadSoldProducts();
}

loadSoldProducts(): void {
   this.userId=sessionStorage.getItem('userId');
  this.orderService.getSoldProductsByUserId(this.userId)
    .subscribe(
      (data: OrderData[]) => {
        this.orderData = data;
      },
      error => {
        console.log('Error fetching sold products:', error);
      }
    );
}
}