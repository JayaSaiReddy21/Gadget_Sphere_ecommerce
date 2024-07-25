package com.gadget.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.gadget.model.BankServer;

public interface BankServerRepository extends JpaRepository<BankServer, Integer>{
	
	@Query(value = "select * from bank_server b where (b.card_number=?1) && (b.cvv_number=?2) && (b.expiry_date like ?3%) && (b.card_holder_name=?4)",nativeQuery = true)
	public BankServer findByCardCvv(Long cardNumber, Integer cvvNumber, String expiryDate,String cardHolderName);
}