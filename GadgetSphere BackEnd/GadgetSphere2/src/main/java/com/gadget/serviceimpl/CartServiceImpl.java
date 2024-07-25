package com.gadget.serviceimpl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gadget.exceptionhandling.ResourceNotFoundException;
import com.gadget.model.Cart;
import com.gadget.repository.CartRepository;
import com.gadget.service.CartService;
@Service
public class CartServiceImpl implements CartService {

	@Autowired
	private CartRepository cartRepository;

	@Override
	public Cart saveCart(Cart cart) {
		System.out.println(cart.getSelectedQuantity());
		System.out.println(cart.getProductQuantity());
//		Cart cart1 = null ;
//		int q=cart.getSelectedQuantity();
//		while(q>0)
//		{
//		cart1= cartRepository.save(cart);
//		 q--;
//		}
		return cartRepository.save(cart);
		
	}

	@Override
	public List<Cart> getAllCarts() {
		
		return cartRepository.findAll();
	}

	@Override
	public Cart getCartById(int cartId) {
		Optional<Cart> cart=cartRepository.findById(cartId);
		  if(cart.isPresent()) { return cart.get(); }else throw new
		  ResourceNotFoundException("Cart","id",cartId);
	}

	@Override
	public void removeItem(int cartId) {
		cartRepository.findById(cartId).orElseThrow(()->new ResourceNotFoundException("Cart","id",cartId));
		cartRepository.deleteById(cartId);
		
	}

	@Override
	public Cart updateCart(Cart cart, int cartId) {
		Cart existingCart=cartRepository.findById(cartId).orElseThrow(()->new ResourceNotFoundException("Cart","id",cartId));
		existingCart.setCartId(cart.getCartId());
		existingCart.setUserId(cart.getUserId());
		existingCart.setProductId(cart.getProductId());
		existingCart.setImageLink(cart.getImageLink());
		existingCart.setProductBrand(cart.getProductBrand());
		existingCart.setProductQuantity(cart.getProductQuantity());
		existingCart.setSelectedQuantity(cart.getSelectedQuantity());
		existingCart.setProductPrice(cart.getProductPrice());
		
		cartRepository.save(existingCart);
		return existingCart;
	}
	
	
	@Override
	public List<Cart> findCartByUserId(int userId) {
		return cartRepository.findCartByUserId(userId);
	}
	
	

}
