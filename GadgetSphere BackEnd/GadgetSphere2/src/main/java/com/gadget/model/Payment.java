package com.gadget.model;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;


@Entity
@Table
public class Payment {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="Payment_id")
	private int paymentId;
	
	@Column(name="User_Id")
	private int userId;
	
	@Column(name="Product_Id")
	private int productId;
	
	@Column(name="Payment_Status")
	private String paymentStatus;
	
	@Column(name="Payment_Mode")
	private String paymentMode;
	
	private long totalAmount;
	
	private String cardHolderName;
	
	private long cardNumber;
	
	private Date expiryDate;
	
	private int cardCvv;
	
//	@ManyToOne
//    @JoinColumn(name = "user_id")
//    private User user;
	
//	@OneToOne
//    @JoinColumn(name = "user_id")
//    private User user;

//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "payment")
//    private List<Cart> carts;
	
//	@OneToOne
//    @JoinColumn(name = "user_Id")
//    private User user;
	
	public Payment()
	{
		
	}
	
	

//	public User getUser() {
//		return user;
//	}
//
//
//
//	public void setUser(User user) {
//		this.user = user;
//	}






	
	
	



	public long getTotalAmount() {
		return totalAmount;
	}



	@Override
	public String toString() {
		return "Payment [paymentId=" + paymentId + ", userId=" + userId + ", productId=" + productId
				+ ", paymentStatus=" + paymentStatus + ", paymentMode=" + paymentMode + ", totalAmount=" + totalAmount
				+ ", cardHolderName=" + cardHolderName + ", cardNumber=" + cardNumber + ", expiryDate=" + expiryDate
				+ ", cardCvv=" + cardCvv + "]";
	}



	public void setTotalAmount(long totalAmount) {
		this.totalAmount = totalAmount;
	}



	public String getCardHolderName() {
		return cardHolderName;
	}



	public void setCardHolderName(String cardHolderName) {
		this.cardHolderName = cardHolderName;
	}



	public long getCardNumber() {
		return cardNumber;
	}



	public void setCardNumber(long cardNumber) {
		this.cardNumber = cardNumber;
	}



	public Date getExpiryDate() {
		return expiryDate;
	}



	public void setExpiryDate(Date expiryDate) {
		this.expiryDate = expiryDate;
	}



	public int getCardCvv() {
		return cardCvv;
	}



	public void setCardCvv(int cardCvv) {
		this.cardCvv = cardCvv;
	}



	public int getPaymentId() {
		return paymentId;
	}



	public void setPaymentId(int paymentId) {
		this.paymentId = paymentId;
	}



	public int getUserId() {
		return userId;
	}



	public void setUserId(int userId) {
		this.userId = userId;
	}



	public int getProductId() {
		return productId;
	}



	public void setProductId(int productId) {
		this.productId = productId;
	}



	public String getPaymentStatus() {
		return paymentStatus;
	}



	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}



	public String getPaymentMode() {
		return paymentMode;
	}



	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}



	
	
	
	

	
	
	
	

}
