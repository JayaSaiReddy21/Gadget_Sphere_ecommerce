package com.gadget.service;

import java.util.List;

import com.gadget.model.Cart;

public interface CartService {
	
	public Cart saveCart(Cart cart);
	public List<Cart> getAllCarts();
	public Cart getCartById(int cartId);
	public void removeItem(int cartId);
	Cart updateCart(Cart cart, int cartId);
	
	public List<Cart> findCartByUserId(int userId);

}
