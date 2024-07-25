package com.gadget.service;

import com.gadget.model.BankServer;

public interface BankServerService {
	 
public BankServer saveDetails(BankServer bankServer);

public BankServer findByCardCvv(Long cardNumber, Integer cvvNumber, String expiryDate , String cardHolderName);

}