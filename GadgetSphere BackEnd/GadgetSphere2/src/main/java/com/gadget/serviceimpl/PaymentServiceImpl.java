package com.gadget.serviceimpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gadget.exceptionhandling.ResourceNotFoundException;
import com.gadget.model.Payment;
import com.gadget.model.Product;
import com.gadget.repository.PaymentRepository;
import com.gadget.service.PaymentService;
import com.gadget.service.ProductService;

@Service
public class PaymentServiceImpl	implements PaymentService {

	@Autowired
	private ProductService productService;

	@Autowired
	private PaymentRepository paymentRepository;

	@Override
	public Payment savePayment(Payment payment) {
		payment.setPaymentStatus("Payment Done");
		return paymentRepository.save(payment);
	}

	@Override
	public List<Payment> getAllPayments() {

		return paymentRepository.findAll();
	}

	@Override
	public Payment getPaymentById(int paymentId) {

		Optional<Payment> payment=paymentRepository.findById(paymentId);
		if(payment.isPresent()) 
		{ 
			return payment.get(); 
		}else throw new ResourceNotFoundException("Payment","id",paymentId);
	}

	@Override
	public void removePayment(int paymentId) {
		paymentRepository.findById(paymentId).orElseThrow(()->new ResourceNotFoundException("Payment","id",paymentId));
		paymentRepository.deleteById(paymentId);

	}

	@Override
	public Payment updatePayment(Payment payment, int paymentId) {
		Payment existingPayment=paymentRepository.findById(paymentId).orElseThrow(()->new ResourceNotFoundException("Payment","Id",paymentId));
		existingPayment.setPaymentMode(payment.getPaymentMode());
		existingPayment.setPaymentStatus(payment.getPaymentStatus());


		paymentRepository.save(existingPayment);
		return existingPayment;
	}

	@Override
	public List<Product> getProductsByUserId(int userId) {
		List<Payment> paymentList = paymentRepository.findByUserId(userId);
		List<Product> productList = new ArrayList<>() ;
		for(Payment payment : paymentList)
		{
			int productId = payment.getProductId();
			Product product = productService.getProductById(productId);
			productList.add(product);
			
			
		}
		return productList;
	}


}
