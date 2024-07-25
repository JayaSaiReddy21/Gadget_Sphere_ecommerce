package com.gadget.serviceimpl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gadget.exceptionhandling.ResourceNotFoundException;
import com.gadget.model.User;
import com.gadget.repository.UserRepository;
import com.gadget.service.UserService;
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository ;

	//addUser
	@Override
	public User saveUser(User user) {

		return userRepository.save(user);
	}

	//GetAllUser
	@Override
	public List<User> getAllUsers() {

		return userRepository.findAll();
	}

	//GetUserById
	@Override
	public User getUserById(int userId) {
		Optional<User> user=userRepository.findById((int) userId);
		if(user.isPresent()) { return user.get(); }else throw new
		ResourceNotFoundException("User","userId",userId);
	}

	//DeleteUser
	@Override
	public void removeUser(int userId) {
		userRepository.findById(userId).orElseThrow(()->new ResourceNotFoundException("User","userId",userId));
		userRepository.deleteById(userId);


	}

	//Update User
	@Override
	public User updateUser(User user, int userId) {
		User existingUser=userRepository.findById(userId).orElseThrow(()->new ResourceNotFoundException("User","userId",userId));

		existingUser.setAddress(user.getAddress());
		existingUser.setDistrict(user.getDistrict());
		existingUser.setEmailId(user.getEmailId());
		existingUser.setFirstName(user.getFirstName());
		existingUser.setLastName(user.getLastName());
		existingUser.setMobileNo(user.getMobileNo());
		existingUser.setPassword(user.getPassword());
		existingUser.setPincode(user.getPincode());
		existingUser.setState(user.getState());


		userRepository.save(existingUser);
		return existingUser;
	}

	//find user by name
	@Override
	public User findbyusername(String emailId, String password) {

		return userRepository.findbyusername(emailId,password);
	}


	//forgot password impl
	//Update User
	@Override
	public void UpdateNewPassByMail(String emailId,String password, User user)
	{
		
		userRepository.UpdateNewPassByMail(emailId, password);	
	}		

	//forgotpass purpose
	@Override
	public User findByEmailId(String emailId) {
		return userRepository.findByEmailId(emailId);
	}


}
