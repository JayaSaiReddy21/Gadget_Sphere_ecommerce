package com.gadget.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gadget.model.BankServer;
import com.gadget.repository.BankServerRepository;
import com.gadget.service.BankServerService;

@Service
public class BankServerImpl implements BankServerService {

	@Autowired
	private BankServerRepository bankServerRepository;
	
	@Override
	public BankServer saveDetails(BankServer bankServer) {
		
		return bankServerRepository.save(bankServer);
	}
	@Override
	public BankServer findByCardCvv(Long cardNumber, Integer cvvNumber,String expiryDate,String cardHolderName) {
		return bankServerRepository.findByCardCvv(cardNumber,cvvNumber,expiryDate,cardHolderName);
	}
	
}