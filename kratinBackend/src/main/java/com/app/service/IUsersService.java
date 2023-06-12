package com.app.service;

import com.app.pojos.Users;

public interface IUsersService {
	
	Users findUserByEmail(String email);
	String addUser(Users newUser);

}
