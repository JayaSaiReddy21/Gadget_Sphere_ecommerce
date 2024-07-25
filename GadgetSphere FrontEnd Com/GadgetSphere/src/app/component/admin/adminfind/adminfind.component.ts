import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../productlist/productlist.component';

@Component({
  selector: 'app-adminfind',
  templateUrl: './adminfind.component.html',
  styleUrl: './adminfind.component.css'
})
export class AdminfindComponent implements OnInit {
  productId!: Number;
  name = "Ap";

  products = new Product(0, '',  0, '', '', '', '', '','',0, '', '', '', '');
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['productId'];
   // this.findAll=new FindAll(this.id,'','','',0,0,'','','','','','','','','','');
    if (this.productId != 0) {
      this.productService.getbyid(this.productId).subscribe
        (data => this.products = data);

    }
    
  }
  //save
  addproduct() {
    console.log(this.products)
    if (this.productId == 0) {
      
    }

    else {
      this.productService.updateProductById(this.productId, this.products).subscribe(data => {
        console.log(data)
        this.router.navigate(['productlist'])
      })
    }

    this.productService.saveProduct(this.products).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['productlist'])
      })
   

  }


}