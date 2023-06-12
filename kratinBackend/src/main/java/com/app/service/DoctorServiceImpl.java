package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.Categories;
import com.app.pojos.Doctors;
import com.app.repo.DoctorsRepo;

@Service
public class DoctorServiceImpl implements IDoctorService {

	
	@Autowired
	DoctorsRepo dRepo;

	@Override
	public Doctors findByCategory(Categories category) {
		
		Doctors doc = dRepo.findByCategory(category);
		return doc;
	}
	
	
}
