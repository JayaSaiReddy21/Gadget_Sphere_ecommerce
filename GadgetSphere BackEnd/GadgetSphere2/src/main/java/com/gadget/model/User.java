package com.gadget.model;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;


@Entity
@Table
public class User {
	@Id
	//@GeneratedValue(strategy=GenerationType.SEQUENCE)
	@GeneratedValue(strategy=GenerationType.AUTO, generator="myGenerator")
	@SequenceGenerator(name="myGenerator", sequenceName="myGenerator", allocationSize=1)
	@Column(name="User_Id")
	private int userId;

	@Column(name="First_Name")
	//@NotEmpty
	//@Size(min=3,message="FirstName must contain atleast 3 character")
	private String firstName;


	@Column(name="Last_name")
	//@NotEmpty
	//@Size(min=3,message="Surname must contain atleast 3 character")
	private String lastName;

	@Column(name="Email_Id",unique=true)
	//@NotEmpty
	//@Email(message="Email is not valid")
	private String emailId;

	@Column(name="password")
//	@NotEmpty
//	@Size(min=8,message="Password length must be 8 and contain uppercase,lowecase and special symbols")
//	@Pattern(regexp="(?=.\\d) (?=,[a-z]) (?=.*[A-Z]).8")
	private String password;

	@Column(name="Address")
	//@NotEmpty
	private String address;

	@Column(name="district")
	//@NotEmpty
	private String district;

	@Column(name="state")
	//@NotEmpty
	private String state;

	@Column(name="pincode")
	//@NotEmpty
	private int pincode;

	@Column(name="mobile_no")
	//@Size(max = 10, message = "Mobile number must be 10 digits")
	private long mobileNo;

//	@OneToMany(cascade = CascadeType.ALL)
//	private List<Order> orders;
//
//	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
//	private Payment payment;
//
	

	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Product> products;

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

	public User()
	{

	}

	

	

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public long getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(long mobileNo) {
		this.mobileNo = mobileNo;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", fistName=" + firstName + ", lastName=" + lastName + ", emailId=" + emailId
				+ ", password=" + password + ", address=" + address + ", district=" + district + ", state=" + state
				+ ", pincode=" + pincode + ", mobileNo=" + mobileNo + ", products=" + products + "]";
	}

	
	
	




}
