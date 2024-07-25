package com.gadget.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gadget.model.Product;
import com.gadget.service.ProductService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/product")
public class ProductController {

	@Autowired
	private ProductService productService ;

	//adding new product
	@PostMapping("/add")
	public ResponseEntity<Product> saveProduct(@RequestBody Product product)
	{
		return new ResponseEntity<Product>(productService.saveProduct(product),HttpStatus.CREATED);
	}

	//Displaying product list
	@GetMapping("/show")
	public List<Product> getAllProducts()
	{
		return productService.getAllProducts();
	}

	//Getting product by id
	@GetMapping("/{productId}")
	public ResponseEntity<Product> getProductById(@PathVariable("productId") int productId)
	{
		return new ResponseEntity<Product>(productService.getProductById(productId),HttpStatus.OK);
	}

	//Deleting product by id
	@DeleteMapping("/delete/{productId}")
	public ResponseEntity<String> removeProduct(@PathVariable("productId") int productId)
	{
		productService.removeProduct(productId);
		return new ResponseEntity<String>("Product deleted successfully",HttpStatus.OK);
	}

	//Updating product
	@PutMapping("/update/{productId}")
	public ResponseEntity<Product> updateProduct(@PathVariable("productId") int productId, @RequestBody Product product)
	{
		return new ResponseEntity<Product> (productService.updateProduct(product, productId),HttpStatus.OK);
	}

	

	// find product by name
	@GetMapping("/getProductByName/{productName}")
	public List<Product> getProductByName(@PathVariable("productName") String productName) {
		return productService.getProductByName(productName);
		
		

	}
	
	@PutMapping("/updateQuantity/product/{productId}/quantity/{quantity}")
	public ResponseEntity<Product> updateQuantity(@PathVariable("productId") int productId,@PathVariable("quantity") int quantity, @RequestBody Product product)
	{
		return new ResponseEntity<Product> (productService.updateQuantity(productId,quantity),HttpStatus.OK);
	}


}
