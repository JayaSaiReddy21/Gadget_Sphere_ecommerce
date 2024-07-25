package com.gadget.model;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity

public class BankServer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(unique = true)

	private Long cardNumber;
	@Column(unique = true)

	private Integer cvvNumber;
	@Column(unique = true)

	private Date expiryDate ;

	private String cardHolderName;
	
	

	

	public BankServer() {
		super();

	}





	public BankServer(Integer id, Long cardNumber, Integer cvvNumber, Date expiryDate, String cardHolderName) {
		super();
		this.id = id;
		this.cardNumber = cardNumber;
		this.cvvNumber = cvvNumber;
		this.expiryDate = expiryDate;
		this.cardHolderName = cardHolderName;
	}





	public Integer getId() {
		return id;
	}





	public void setId(Integer id) {
		this.id = id;
	}





	public Long getCardNumber() {
		return cardNumber;
	}





	public void setCardNumber(Long cardNumber) {
		this.cardNumber = cardNumber;
	}





	public Integer getCvvNumber() {
		return cvvNumber;
	}





	public void setCvvNumber(Integer cvvNumber) {
		this.cvvNumber = cvvNumber;
	}





	public Date getExpiryDate() {
		return expiryDate;
	}





	public void setExpiryDate(Date expiryDate) {
		this.expiryDate = expiryDate;
	}





	public String getCardHolderName() {
		return cardHolderName;
	}





	public void setCardHolderName(String cardHolderName) {
		this.cardHolderName = cardHolderName;
	}





	@Override
	public String toString() {
		return "BankServer [id=" + id + ", cardNumber=" + cardNumber + ", cvvNumber=" + cvvNumber + ", expiryDate="
				+ expiryDate + ", cardHolderName=" + cardHolderName + "]";
	}

	

	


}