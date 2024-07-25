package com.gadget.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;

@Entity
@Table
public class Product {
	@Id
	//@GeneratedValue(strategy=GenerationType.AUTO)
	@GeneratedValue(strategy=GenerationType.AUTO, generator="productGenerator")
	@SequenceGenerator(name="productGenerator", sequenceName="productGenerator", allocationSize=1)
	@Column(name="Product_id")
	private int productId;
	
	@Column(name="Product_Name")
	//@NotEmpty
	private String productName;
	
	@Column(name="Product_Price")
	//@NotEmpty
	private long productPrice;
	
	@Column(name="Product_Colour")
	//@NotEmpty
	private String productColour;
	
	@Column(name="Product_Warranty")//For Rating Purpose 
	//@NotEmpty
	private String productWarranty;
	
	@Column(name="Product_Description1")
	//@NotEmpty
	private String productDescription1;

	@Column(name="Product_Description2")
	//@NotEmpty
	private String productDescription2;
	
	@Column(name="Product_Description3")
	//@NotEmpty
	private String productDescription3;
	
	@Column(name="Product_Description4")
	//@NotEmpty
	private String productDescription4;
	
	@Column(name="Product_Quantity")
	//@NotEmpty
	private int productQuantity;
	
	
	private String Link;
	
	private String Link1;
	
	private String Link2;
	
	private String Link3;
	
	
//	@OneToMany(cascade = CascadeType.ALL)
//    private List<Cart> carts;
	

	
	@ManyToOne
    @JoinColumn(name = "user_Id")
    private User user;
	
	public Product()
	{
		
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public long getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(long productPrice) {
		this.productPrice = productPrice;
	}

	public String getProductColour() {
		return productColour;
	}

	public void setProductColour(String productColour) {
		this.productColour = productColour;
	}

	public String getProductWarranty() {
		return productWarranty;
	}

	public void setProductWarranty(String productWarranty) {
		this.productWarranty = productWarranty;
	}
	
	public String getProductDescription1() {
		return productDescription1;
	}

	public void setProductDescription1(String productDescription1) {
		this.productDescription1 = productDescription1;
	}
	
	public String getProductDescription2() {
		return productDescription2;
	}

	public void setProductDescription2(String productDescription2) {
		this.productDescription2 = productDescription2;
	}
	
	public String getProductDescription3() {
		return productDescription3;
	}

	public void setProductDescription3(String productDescription3) {
		this.productDescription3 = productDescription3;
	}
	
	public String getProductDescription4() {
		return productDescription4;
	}

	public void setProductDescription4(String productDescription4) {
		this.productDescription4 = productDescription4;
	}

	public int getProductQuantity() {
		return productQuantity;
	}

	public void setProductQuantity(int productQuantity) {
		this.productQuantity = productQuantity;
	}


	public String getLink() {
		return Link;
	}

	public void setLink(String link) {
		Link = link;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	

	public String getLink1() {
		return Link1;
	}

	public void setLink1(String link1) {
		Link1 = link1;
	}

	public String getLink2() {
		return Link2;
	}

	public void setLink2(String link2) {
		Link2 = link2;
	}

	public String getLink3() {
		return Link3;
	}

	public void setLink3(String link3) {
		Link3 = link3;
	}

	@Override
	public String toString() {
		return "Product [productId=" + productId + ", productName=" + productName + ", productPrice=" + productPrice
				+ ", productColour=" + productColour + ", productWarranty=" + productWarranty + ", productDescription1="
				+ productDescription1 + ", productDescription2=" + productDescription2 + ", productDescription3=" + productDescription3
				+ ", productDescription4=" + productDescription4 + ", productQuantity=" + productQuantity + ", Link=" + Link + ", Link1=" + Link1
				+ ", Link2=" + Link2 + ", Link3=" + Link3 + ", user=" + user + "]";
	}

	

	
	
	

	

	
	
	}

