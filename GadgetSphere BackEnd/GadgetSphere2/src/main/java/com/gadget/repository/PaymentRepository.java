package com.gadget.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gadget.model.Payment;



public interface PaymentRepository extends JpaRepository<Payment,Integer>{
	
	public List<Payment> findByUserId(int userId);

}
