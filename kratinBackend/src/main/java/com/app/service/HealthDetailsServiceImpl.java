package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.HealthDetails;
import com.app.pojos.Users;
import com.app.repo.HealthDetailsRepo;

@Service
public class HealthDetailsServiceImpl implements IHealthDetailsService{

	@Autowired
	HealthDetailsRepo hdRepo;
	
	@Override
	public List<HealthDetails> hdListByUser(Users user) {
		
		List<HealthDetails> hdList = hdRepo.findByUserHealthDetails(user);
		
		return hdList;
	}

	@Override
	public String addHd(HealthDetails newHealthDetails) {
		
		hdRepo.save(newHealthDetails);
		return "Health details added";
	}

}
