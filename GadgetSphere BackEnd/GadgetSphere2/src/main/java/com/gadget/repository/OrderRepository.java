package com.gadget.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gadget.model.Order;
import com.gadget.model.User;



public interface OrderRepository extends JpaRepository<Order,Integer>{
	
	public List<Order> findByUserId(long userId);
	
	//for my orders
	List<Order> findByUserId(Long userId);

}
