package com.gadget.service;

import java.util.List;

import com.gadget.model.Payment;
import com.gadget.model.Product;


public interface PaymentService {
	
	public Payment savePayment(Payment payment);
	public List<Payment> getAllPayments();
	public Payment getPaymentById(int paymentId);
	public void removePayment(int paymentId);
	public Payment updatePayment(Payment payment, int paymentId);
	
	public List<Product> getProductsByUserId(int userId);

}
