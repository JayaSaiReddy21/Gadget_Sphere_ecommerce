package com.gadget.service;

import java.util.List;

import com.gadget.model.Order;
import com.gadget.model.Product;
import com.gadget.model.User;


public interface OrderService {
	
	public Order saveOrder(Order order);
	public List<Order> getAllOrders();
	public Order getOrderById(int orderId);
	public void removeOrder(int orderId);
	Order updateOrder(Order order, int orderId);
	
	public Order findByUserId(long userId);
	
	public List<Order> getAllSoldProduct();
	
	//for my orders 
	List<Order> getSoldProductsByUserId(Long userId);

}
