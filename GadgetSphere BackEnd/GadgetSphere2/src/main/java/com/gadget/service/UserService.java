package com.gadget.service;

import java.util.List;

import com.gadget.model.User;


public interface UserService {

	public User saveUser(User user);
	public List<User> getAllUsers();
	public User getUserById(int userId);
	public void removeUser(int userId);
	public User updateUser(User user, int userId);

	//getting user by name
	public User findbyusername(String emailId, String password);


	public void UpdateNewPassByMail(String emailId,String password, User user);

	public User findByEmailId(String emailId);

}
