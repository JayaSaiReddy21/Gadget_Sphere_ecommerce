
package com.gadget.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;

@Entity
@Table
public class Cart {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="Cart_Id")
	private int cartId;
	
	@Column(name="User_Id")
	private int userId;

	@Column(name="Product_Id")
	private int productId;
	
	private String imageLink;
	
	@Column(name="Product_Name")
	private String productName;
	
	@Column(name="Product_Brand")
	private String productBrand;

	@Column(name="product_Quantity")
	private int productQuantity;
	
	@Column(name="selected_Quantity")
	private int selectedQuantity;
	
	@Column(name="product_Price")
	private int productPrice;


	

	//	@ManyToOne
	//	@JoinColumn(name = "order_id")
	//	private Order order;

//	@ManyToOne
//	@JoinColumn(name = "user_Id")
//	private User user;



	public Cart() {

	}




	public int getCartId() {
		return cartId;
	}




	public void setCartId(int cartId) {
		this.cartId = cartId;
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




	public String getImageLink() {
		return imageLink;
	}




	public void setImageLink(String imageLink) {
		this.imageLink = imageLink;
	}




	public String getProductName() {
		return productName;
	}




	public void setProductName(String productName) {
		this.productName = productName;
	}




	public String getProductBrand() {
		return productBrand;
	}




	public void setProductBrand(String productBrand) {
		this.productBrand = productBrand;
	}




	public int getProductQuantity() {
		return productQuantity;
	}




	public void setProductQuantity(int productQuantity) {
		this.productQuantity = productQuantity;
	}




	public int getSelectedQuantity() {
		return selectedQuantity;
	}




	public void setSelectedQuantity(int selectedQuantity) {
		this.selectedQuantity = selectedQuantity;
	}




	public int getProductPrice() {
		return productPrice;
	}




	public void setProductPrice(int productPrice) {
		this.productPrice = productPrice;
	}




	@Override
	public String toString() {
		return "Cart [cartId=" + cartId + ", userId=" + userId + ", productId=" + productId + ", imageLink=" + imageLink
				+ ", productName=" + productName + ", productBrand=" + productBrand + ", productQuantity="
				+ productQuantity + ", selectedQuantity=" + selectedQuantity + ", productPrice=" + productPrice + "]";
	}



}
