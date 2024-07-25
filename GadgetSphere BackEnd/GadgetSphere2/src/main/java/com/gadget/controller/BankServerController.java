package com.gadget.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gadget.model.BankServer;
import com.gadget.service.BankServerService;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/bankserver")
public class BankServerController {

		@Autowired
		private BankServerService bankServerService;
		
		@PostMapping("/add")
		public BankServer saveDetails(@RequestBody BankServer bankServer) {
			return bankServerService.saveDetails(bankServer);
			
		}
		
		
		//find by card
		@GetMapping("/findCardDetails/{num}/{cvv}/{date}/{cardHolderName}")
		public BankServer findByCardCvv(@PathVariable("num") Long Cardnumber,@PathVariable("cvv") Integer Cvvnumber,@PathVariable("date") String expiryDate,@PathVariable("cardHolderName") String cardHolderName) {
			return bankServerService.findByCardCvv(Cardnumber,Cvvnumber,expiryDate,cardHolderName);
		
			
		}
		
		
		
	}