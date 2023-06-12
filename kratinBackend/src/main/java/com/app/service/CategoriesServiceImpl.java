package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.Categories;
import com.app.pojos.CategoryName;
import com.app.repo.CategoriesRepo;

@Service
public class CategoriesServiceImpl implements ICategoriesService {
	
	@Autowired
	CategoriesRepo cRepo;	

	@Override
	public Categories getCategoryByCat(CategoryName categoryName) {
		
		return cRepo.findByCategory(categoryName);
	}

}
