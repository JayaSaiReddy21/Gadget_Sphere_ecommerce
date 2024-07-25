package com.gadget.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gadget.model.User;
import com.gadget.service.UserService;

import jakarta.validation.Valid;
@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;

	//adding new user
	@PostMapping("/add")
	public ResponseEntity<User> saveUser( @RequestBody User user)
	{
		return new ResponseEntity<User>(userService.saveUser(user),HttpStatus.CREATED);
	}

	//Displaying users list
	@GetMapping("/show")
	public List<User> getAllUser()
	{
		return userService.getAllUsers();
	}

	//Getting user by id
	@GetMapping("/userid/{userId}")
	public ResponseEntity<User> getUserById(@PathVariable("userId") int userId)
	{
		userService.getUserById(userId);
		return new ResponseEntity<User>(userService.getUserById(userId),HttpStatus.OK);
	}

	//Deleting user by id
	@DeleteMapping("/delete/{userId}")
	public ResponseEntity<String> removeUser(@PathVariable("userId") int userId)
	{
		userService.removeUser(userId);
		return new ResponseEntity<String>("Employee deleted successfully",HttpStatus.OK);
	}

	//Updating user
	@PutMapping("/update/{userId}")
	public ResponseEntity<String> updateUser(@PathVariable("userId") int userId, @RequestBody User user)
	{
		userService.updateUser(user, userId);
		return new ResponseEntity<String>("User updated successfully",HttpStatus.OK);
		//return new ResponseEntity<User> (userService.updateUser(user, userId),HttpStatus.OK);
	}

	//getbyusername
	@GetMapping("/findlogin/{emailId}/{password}")
	public User findbyusername(@PathVariable("emailId")String emailId,@PathVariable("password")String Password )
	{
		return userService.findbyusername(emailId,Password);
	}


	//Updating user
	@PutMapping("/UpdateNewPassByMail/{emailId}/{password}")
	public ResponseEntity<String> UpdateNewPassByMail(@PathVariable("emailId") String emailId,@PathVariable("password")  String password ,@RequestBody User user)
	{
		userService.UpdateNewPassByMail(emailId, password,user);
		return new ResponseEntity<String>("User updated successfully",HttpStatus.OK);
		//return new ResponseEntity<User> (userService.UpdateNewPassByMail(user, emailId),HttpStatus.OK);
	}

	//forgotpass
	@GetMapping("/findByEmailId/{emailId}")
	public User findByEmailId(@PathVariable("emailId") String emailId) {
		return userService.findByEmailId(emailId);

	}
	
	//update user by mail id
	


}
