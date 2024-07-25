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

import com.gadget.model.Order;
import com.gadget.model.Product;
import com.gadget.model.User;
import com.gadget.service.OrderService;
@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/order")
public class OrderController {

	@Autowired
	private OrderService orderService ;

	//adding new order
	@PostMapping("/add")
	public ResponseEntity<Order> saveOrder(@RequestBody Order order)
	{
		//return new ResponseEntity<Order>(orderService.saveOrder(order),HttpStatus.CREATED);
		System.out.println("In save" +order);
		Order savedOrder = orderService.saveOrder(order);

		return new ResponseEntity<Order>(savedOrder, HttpStatus.CREATED);
	}

	//Displaying orders list
	@GetMapping("/show")
	public List<Order> getAllOrders()
	{
		return orderService.getAllOrders();
	}

	//Getting order by id
	@GetMapping("/{orderId}")
	public ResponseEntity<Order> getOrderById(@PathVariable("orderId") int orderId)
	{
		return new ResponseEntity<Order>(orderService.getOrderById(orderId),HttpStatus.OK);
	}

	//Deleting order by id
	@DeleteMapping("/delete/{orderId}")
	public ResponseEntity<String> removeOrder(@PathVariable("orderId") int orderId)
	{
		orderService.removeOrder(orderId);
		return new ResponseEntity<String>("Order deleted successfully",HttpStatus.OK);
	}

	//Updating user
	@PutMapping("/update/{o"+ "rderId}")
	public ResponseEntity<Order> updateOrder(@PathVariable("orderId") int orderId, @RequestBody Order order)
	{
		return new ResponseEntity<Order> (orderService.updateOrder(order, orderId),HttpStatus.OK);
	}

	@GetMapping("findByUserId/{userId}")
	public ResponseEntity<Order> findByUserId(@PathVariable("userId") long userId)
	{
		return new ResponseEntity<Order>(orderService.findByUserId(userId),HttpStatus.OK);
	}

	//sold product
	@GetMapping("/getAllSoldProduct")
	public List<Order> getAllSoldProduct()
	{
		return orderService.getAllSoldProduct();
	}
	
	//show my orders
	 @GetMapping("/getSoldProductsByUserId/{userId}")
	    public ResponseEntity<List<Order>> getSoldProductsByUserId(@PathVariable Long userId) {
	        List<Order> orders = orderService.getSoldProductsByUserId(userId);
	        return ResponseEntity.ok(orders);
	    }

}
