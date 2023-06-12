package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailStrucure {
	
	@Autowired
	JavaMailSender mailSender;
	
	public void sendThisMail(String emailId, String subject, String body)
	{
		SimpleMailMessage mail = new SimpleMailMessage();
		mail.setFrom("18healthcare@gmail.com");
		mail.setTo(emailId);
		mail.setSubject(subject);
		mail.setText(body);
		
		mailSender.send(mail);
		
		System.out.println("mail sent");
	}

}
