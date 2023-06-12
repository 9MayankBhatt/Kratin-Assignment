package com.app.service;

import java.util.List;

import com.app.pojos.HealthDetails;
import com.app.pojos.Users;

public interface IHealthDetailsService {

	List<HealthDetails> hdListByUser(Users user);
	String addHd(HealthDetails newHealthDetails);
	
}
