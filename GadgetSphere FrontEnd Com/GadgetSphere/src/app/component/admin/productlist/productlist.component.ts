import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit {
  products: Product[] = []
  product!: Product;
  a: boolean = false;
  name!: string;
  pname!:string ;
  productName : any;

  p:number=1;
  count:number=5;
  
  constructor(private productService: ProductService,
     private router: Router, 
     private route: ActivatedRoute) { }
  ngOnInit(): void {
    //this.name = this.route.snapshot.params['name'];
    //console.log('inside the onginit')
    this.productService.getAllProducts().subscribe(Response => { this.products = Response })

     //search product
     this.route.queryParams.subscribe(params => {
      this.productName = params['productName'];
      if (this.productName) {
        this.searchProduct();
      } else {
        this.loadProduct();
      }
    }, error => {
      console.error('Error retrieving query parameters:', error);
    });
    
  } 

  //search product
  searchProduct() {
    this.productService.getProductByName(this.productName).subscribe(
      response => {
        this.products = response;
        console.log("inside search");
        console.log(response);
      },
      error => {
        console.error('Error fetching products by name:', error);
      }
    );
  }
  loadProduct(){

    }

 

  // button for add
  add() {
    this.router.navigate(['adminfind'])
  }

  //update
  updateprod(productId: number) {
    this.router.navigate(['adminfind', productId])
  }


  //delete by id
  deleteprod(productId: number) {
    this.a = confirm("ARE YOU SURE TO DELETE THIS PRODUCT")
    if (this.a == true) {
      this.productService.deletebyid(productId).subscribe(
        response => {
          this.products = response
          console.log(Response)
        })
      alert("PRODUCT IS DELETED")
    } else {
      alert("YOU DECIDED NOT TO DELETE PRODUCT")
    }
  }
}
export class Product 
{

  constructor(
    public productId: number,
    public productName: string,
    public productPrice: number,
    public productColour: string,
    public productWarranty: string,
    public productDescription1 :string,
    public productDescription2 :string,
    public productDescription3 :string,
    public productDescription4 :string,
    public productQuantity :number,
    public link: string,
    public link1: string,
    public link2: string,
    public link3: string,
  ) { }
}

