import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrl: './showproducts.component.css'
})
export class ShowproductsComponent implements OnInit {
  userId!: number;
  productName!: string;
  productId!: number;
  firstName!: string;
  prodList: ProductsInformation[] = [];
  userName: any;

  constructor(private productService:ProductService,
     private router: Router,
     private activatedRoute:ActivatedRoute)  
     { 
      this.userName=sessionStorage.getItem('userName');
    }

   
  
  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['userId'];
    this.userName=sessionStorage.getItem('userName');
    console.log("22222222222"+this.userName);
    
    this.productService.getproducts().subscribe(Response => { this.prodList = Response })
    
  }


  //buy
  viewprod(productId: number) {
    this.router.navigate(['buy', productId])
  } 
}



export class ProductsInformation {

  constructor(
    public productId: number,
    public productName: string,
    public productPrice: number,
    public productColour: string,
    public productWarranty: string,
    public productDescription1:string,
    public productDescription2:string,
    public productDescription3:string,
    public productDescription4:string,
    public productQuantity:number,
    public link: string,
    public link1 : string,
    public link2 : string,
    public link3 : string,
  ) { }
}
