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

import com.gadget.model.Payment;
import com.gadget.model.Product;
import com.gadget.service.PaymentService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/payment")
public class PaymentController {
	
	@Autowired
	private PaymentService paymentService ;
	
	//adding new payment
	@PostMapping("/save")
	public ResponseEntity<Payment> savePayment(@RequestBody Payment payment)
	{
		return new ResponseEntity<Payment>(paymentService.savePayment(payment),HttpStatus.CREATED);
	}

	//Displaying payments list
	@GetMapping("/show")
	public List<Payment> getAllPayments()
	{
		return paymentService.getAllPayments();
	}
	
	//Getting payment by id
	@GetMapping("/{paymentId}")
	public ResponseEntity<Payment> getPaymentById(@PathVariable("paymentId") int paymentId)
	{
		return new ResponseEntity<Payment>(paymentService.getPaymentById(paymentId),HttpStatus.OK);
	}
	
	//Deleting payment by id
	@DeleteMapping("/delete/{paymentId}")
	public ResponseEntity<String> removePayment(@PathVariable("paymentId") int paymentId)
	{
		paymentService.removePayment(paymentId);
		return new ResponseEntity<String>("Payment deleted successfully",HttpStatus.OK);
	}
	
	//Updating payment
	@PutMapping("/update/{paymentId}")
	public ResponseEntity<Payment> updatePayment(@PathVariable("paymentId") int paymentId, @RequestBody Payment payment)
	{
		return new ResponseEntity<Payment> (paymentService.updatePayment(payment, paymentId),HttpStatus.OK);
	}

	
	@GetMapping("/{userId}")
	public List<Product> getProductsByUserId(@PathVariable("userId") int userId)
	{
		return paymentService.getProductsByUserId(userId);
	}
	
	
}
