package com.gadget.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

public class EmailService 
{

	@Autowired
	private JavaMailSender javaMailSender;
	@Async
	public void sendEmail(String toEmail,String subject,String message)
	{
		//		SimpleMailMessage mailMessage=new SimpleMailMessage();
		//		mailMessage.setTo(toEmail);
		//		mailMessage.setSubject(subject);
		//		mailMessage.setText(message);
		//		mailMessage.setFrom("express2gk@gmail.om");
		//		javaMailSender.send(mailMessage);

		MimeMessage mail = javaMailSender.createMimeMessage();

		MimeMessageHelper helper = new MimeMessageHelper(mail, "utf-8");
		//String htmlMsg = "<h3>Hello World!</h3> <br> <br> 
		//Regards, <br>Email Service";

		try {

			helper.setText(message, true); 
			helper.setTo(toEmail); 
			helper.setSubject(subject); 
			//helper.setFrom("avadhutp620@gmail.com"); 
			helper.setFrom("bhimaraya4u@gmail.com"); 
			javaMailSender.send(mail); 
			}
			catch(MessagingException ex)
			{
				ex.printStackTrace();
			}

		}
}
	






