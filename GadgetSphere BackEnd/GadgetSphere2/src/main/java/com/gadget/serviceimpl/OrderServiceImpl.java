package com.gadget.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gadget.exceptionhandling.ResourceNotFoundException;
import com.gadget.model.Order;
import com.gadget.model.Product;
import com.gadget.model.User;
import com.gadget.repository.OrderRepository;
import com.gadget.service.OrderService;
@Service
public class OrderServiceImpl implements OrderService{

	@Autowired
	private OrderRepository orderRepository;
	
	@Override
	public Order saveOrder(Order order) {
		System.out.println(order.getOrderQuantity());
		return orderRepository.save(order);
	}

	@Override
	public List<Order> getAllOrders() {
		return orderRepository.findAll();
	}

	@Override
	public Order getOrderById(int orderId) {
		Optional<Order> order=orderRepository.findById(orderId);
		  if(order.isPresent()) { return order.get(); }else throw new
		  ResourceNotFoundException("Order","orderId",orderId);
	}

	@Override
	public void removeOrder(int orderId) {
		orderRepository.findById(orderId).orElseThrow(()->new ResourceNotFoundException("Order","orderId",orderId));
		orderRepository.deleteById(orderId);
		
	}

	@Override
	public Order updateOrder(Order order, int orderId) {
		Order existingOrder=orderRepository.findById(orderId).orElseThrow(()->new ResourceNotFoundException("Order","orderId",orderId));
		existingOrder.setUserId(order.getUserId());
		existingOrder.setProductId(order.getProductId());
		existingOrder.setOrderQuantity(order.getOrderQuantity());
		existingOrder.setFullName(order.getFullName());
		existingOrder.setPhoneNumber(order.getPhoneNumber());
		existingOrder.setCountry(order.getCountry());
		existingOrder.setPincode(order.getPincode());
		existingOrder.setFlat(order.getFlat());
		existingOrder.setLandmark(order.getLandmark());
		existingOrder.setState(order.getState());
		existingOrder.setPaymentMethod(order.getPaymentMethod());
		existingOrder.setOrderStatus(order.getOrderStatus());
		existingOrder.setProductName(order.getProductName());
		existingOrder.setProductPrice(order.getProductPrice());
		
		orderRepository.save(existingOrder);
		return existingOrder;
	}

	@Override
	public Order findByUserId(long userId) {
		
		List<Order> userList = orderRepository.findByUserId(userId);
		return userList.get(0);
	}

	@Override
	public List<Order> getAllSoldProduct() {
	
		return orderRepository.findAll();
	}

	@Override
	public List<Order> getSoldProductsByUserId(Long userId) {
		
		  return orderRepository.findByUserId(userId);
	}
	

}
