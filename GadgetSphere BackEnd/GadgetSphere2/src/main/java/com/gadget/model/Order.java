package com.gadget.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name="OrderTable")
public class Order {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO, generator="orderGenerator")
	@SequenceGenerator(name="orderGenerator", sequenceName="orderGenerator", allocationSize=1)
	@Column(name="Order_Id")
	private int orderId;

	@Column(name="User_Id")
	private long userId;

	@Column(name="Product_Id")
	private int productId;

	@Column(name="Order_Quantity")
	private int orderQuantity;



	@Column(name="User_Full_Name")
	private String fullName;

	private long phoneNumber;

	private String country;
	private int pincode;
	private String flat;
	private String landmark;
	private String state;
	
	private String paymentMethod;
	private String orderStatus;
	
	private String productName;
	private long productPrice;



	//	@ManyToMany
	//	@JoinColumn(name = "user_Id")
	//	private User user;

	//	@OneToMany(cascade = CascadeType.ALL, mappedBy = "orderId")
	//	private List<Cart> cart;
	//	
	//	@OneToMany(cascade = CascadeType.ALL, mappedBy = "orderId")
	//    private List<User> user;

	//	@ManyToOne
	//    @JoinColumn(name = "user_Id")
	//    private User user;
	//	

	public Order()
	{

	}


	

	public long getProductPrice() {
		return productPrice;
	}




	public void setProductPrice(long productPrice) {
		this.productPrice = productPrice;
	}




	public String getProductName() {
		return productName;
	}




	public void setProductName(String productName) {
		this.productName = productName;
	}




	public String getPaymentMethod() {
		return paymentMethod;
	}



	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}



	public String getOrderStatus() {
		return orderStatus;
	}



	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}



	public int getOrderId() {
		return orderId;
	}



	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}



	public long getUserId() {
		return userId;
	}



	public void setUserId(long userId) {
		this.userId = userId;
	}



	public int getProductId() {
		return productId;
	}



	public void setProductId(int productId) {
		this.productId = productId;
	}



	public int getOrderQuantity() {
		return orderQuantity;
	}



	public void setOrderQuantity(int orderQuantity) {
		this.orderQuantity = orderQuantity;
	}



	public String getFullName() {
		return fullName;
	}



	public void setFullName(String fullName) {
		this.fullName = fullName;
	}



	public long getPhoneNumber() {
		return phoneNumber;
	}



	public void setPhoneNumber(long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}



	public String getCountry() {
		return country;
	}



	public void setCountry(String country) {
		this.country = country;
	}



	public int getPincode() {
		return pincode;
	}



	public void setPincode(int pincode) {
		this.pincode = pincode;
	}



	public String getFlat() {
		return flat;
	}



	public void setFlat(String flat) {
		this.flat = flat;
	}



	public String getLandmark() {
		return landmark;
	}



	public void setLandmark(String landmark) {
		this.landmark = landmark;
	}



	public String getState() {
		return state;
	}



	public void setState(String state) {
		this.state = state;
	}



	@Override
	public String toString() {
		return "Order [orderId=" + orderId + ", userId=" + userId + ", productId=" + productId + ", orderQuantity="
				+ orderQuantity + ", fullName=" + fullName + ", phoneNumber=" + phoneNumber + ", country=" + country
				+ ", pincode=" + pincode + ", flat=" + flat + ", landmark=" + landmark + ", state=" + state
				+ ", paymentMethod=" + paymentMethod + ", orderStatus=" + orderStatus + ", productName=" + productName
				+ ", productPrice=" + productPrice + "]";
	}





	













}
