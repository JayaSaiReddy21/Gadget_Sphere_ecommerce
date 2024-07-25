package com.gadget.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.gadget.model.Cart;



public interface CartRepository extends JpaRepository<Cart,Integer>{
	
	@Query(value = "select * from cart c where c.User_Id=?1",nativeQuery = true)
	public List<Cart> findCartByUserId(int userId);
	
}
