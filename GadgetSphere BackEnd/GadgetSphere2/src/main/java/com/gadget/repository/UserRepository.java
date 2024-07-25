package com.gadget.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.gadget.model.User;

import jakarta.transaction.Transactional;


public interface UserRepository extends JpaRepository<User,Integer> {

	//find user by name
	@Query(value ="select * from user a where (a.Email_Id= ?1 or a.mobile_no= ?1) && a.password = ?2",nativeQuery = true)
	public  User findbyusername(String emailId, String password);

	@Transactional
	@Modifying
	@Query(value = "update user a set a.password=?2 where a.email_Id=?1",nativeQuery = true)
	public void UpdateNewPassByMail(String emailId, String newpassword);



//	@Transactional
//	@Modifying
//	@Query(value = "update user a set a.Email_Id=?1 ",nativeQuery = true)
	public User findByEmailId(String emailId);
	
	//update user by email purpose
	@Transactional
	@Modifying
	@Query(value = "update user a set a.User_Id=?1",nativeQuery = true)
	public void updateUserByuserId(int userId);

}
