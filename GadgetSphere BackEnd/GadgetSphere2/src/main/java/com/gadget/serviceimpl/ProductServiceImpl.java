package com.gadget.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gadget.exceptionhandling.ResourceNotFoundException;
import com.gadget.model.Product;
import com.gadget.repository.ProductRepository;
import com.gadget.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService{

	@Autowired
	private ProductRepository productRepository;

	@Override
	public Product saveProduct(Product product) {
		return productRepository.save(product);
	}

	@Override
	public List<Product> getAllProducts() {

		return productRepository.findAll();
	}

	@Override
	public Product getProductById(int productId) {

		Optional<Product> product=productRepository.findById(productId);
		if(product.isPresent()) 
		{
			return product.get(); 
		}else throw new ResourceNotFoundException("Product","productId",productId);
	}

	@Override
	public void removeProduct(int productId) {
		productRepository.findById(productId).orElseThrow(()->new ResourceNotFoundException("Product","productId",productId));
		productRepository.deleteById(productId);

	}

	@Override
	public Product updateProduct(Product product, int productId) {
		Product existingProduct=productRepository.findById(productId).orElseThrow(()->new ResourceNotFoundException("Product","productId",productId));
		existingProduct.setProductName(product.getProductName());
		existingProduct.setProductPrice(product.getProductPrice());
		existingProduct.setProductColour(product.getProductColour());
		existingProduct.setProductWarranty(product.getProductWarranty());
		existingProduct.setProductDescription1(product.getProductDescription1());
		existingProduct.setProductDescription2(product.getProductDescription2());
		existingProduct.setProductDescription3(product.getProductDescription3());
		existingProduct.setProductDescription4(product.getProductDescription4());
		existingProduct.setProductQuantity(product.getProductQuantity());
		existingProduct.setLink(product.getLink());
		existingProduct.setLink1(product.getLink1());
		existingProduct.setLink2(product.getLink2());
		existingProduct.setLink3(product.getLink3());

		productRepository.save(existingProduct);
		return existingProduct;
	}


	//sold 
	

	// find product by name
	@Override
	public List<Product> getProductByName(String productName) {
		return productRepository.getProductByName(productName);
	}

	@Override
	public Product updateQuantity(int productId, int quantity) {
		Product product = getProductById(productId);
		product.setProductQuantity(product.getProductQuantity()-quantity);
		productRepository.save(product);
		
		return product;
	}

}
