package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.Users;
import com.app.repo.UsersRepo;

@Service
public class UsersServiceImpl implements IUsersService{

	@Autowired
	UsersRepo uRepo;
	
	@Override
	public Users findUserByEmail(String email) {		
		Users user = uRepo.findByEmail(email);
		return user;
	}

	@Override
	public String addUser(Users newUser) {
		
		uRepo.save(newUser);
		
		return "Successfully registered";
	}

	
	
}
