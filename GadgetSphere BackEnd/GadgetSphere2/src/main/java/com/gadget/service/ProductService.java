package com.gadget.service;

import java.util.List;

import com.gadget.model.Product;


public interface ProductService {

	public Product saveProduct(Product product);
	public List<Product> getAllProducts();
	public Product getProductById(int productId);
	public void removeProduct(int productId);
	public Product updateProduct(Product product, int productId);

	//for sold products
	

	// find product by name
	
	public List<Product> getProductByName(String productName);
	
	public Product updateQuantity(int productId, int quantity);

}
