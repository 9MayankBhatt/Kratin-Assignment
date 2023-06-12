package com.app.service;

import java.util.List;

import com.app.pojos.Categories;
import com.app.pojos.Doctors;

public interface IDoctorService {

	Doctors findByCategory(Categories category);
	
}
