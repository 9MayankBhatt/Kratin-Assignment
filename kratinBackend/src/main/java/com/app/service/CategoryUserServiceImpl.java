package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.Categories;
import com.app.pojos.CategoryUser;
import com.app.pojos.Users;
import com.app.repo.CategoryUserRepo;

@Service
public class CategoryUserServiceImpl implements ICategoryUserService {

	@Autowired
	CategoryUserRepo cuRepo;
	
	@Override
	public String addCategoryUser(CategoryUser cu) {
		cuRepo.save(cu);
		return "Category and user added";
	}

	@Override
	public List<Categories> getCategories(Users user) {
		
		List<Categories> categoriesList = cuRepo.findCategoriesByUser(user);		
		return categoriesList;
	}

	@Override
	public List<CategoryUser> getCategoryUsers(Users user) {
		List<CategoryUser> categoryUserList = cuRepo.findByUser(user);
		return categoryUserList;
	}

}
