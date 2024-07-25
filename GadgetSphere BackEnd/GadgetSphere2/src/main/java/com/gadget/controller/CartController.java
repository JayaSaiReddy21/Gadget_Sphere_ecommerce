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

import com.gadget.model.Cart;
import com.gadget.service.CartService;
@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/cart")
public class CartController {

	@Autowired
	private CartService cartService ;
	

	@PostMapping("/add")
	public ResponseEntity<Cart> saveCart(@RequestBody Cart cart)
	{
		return new ResponseEntity<Cart>(cartService.saveCart(cart),HttpStatus.CREATED);
	}

	
	@GetMapping("/show")
	public List<Cart> getAllCarts()
	{
		return cartService.getAllCarts();
	}
	
	
	@GetMapping("{cartId}")
	public ResponseEntity<Cart> getCartById(@PathVariable("cartId") int cartId)
	{
		return new ResponseEntity<Cart>(cartService.getCartById(cartId),HttpStatus.OK);
	}
	
	
	@DeleteMapping("/delete/{cartId}")
	public ResponseEntity<String>removeItem(@PathVariable("cartId") int cartId)
	{
		cartService.removeItem(cartId);;
		return new ResponseEntity<String>("Cart item deleted successfully",HttpStatus.OK);
	}
	
	
	@PutMapping("/update/{cartId}")
	public ResponseEntity<Cart> updateCart(@PathVariable("cartId") int cartId, @RequestBody Cart cart)
	{
		return new ResponseEntity<Cart> (cartService.updateCart(cart, cartId),HttpStatus.OK);
	}
	
	//find cart by user id
	@GetMapping("/findCartByUserId/{userId}")
	public List<Cart> findCartByUserId(@PathVariable("userId") int userId){
		return  cartService.findCartByUserId(userId);

	}
	

}
