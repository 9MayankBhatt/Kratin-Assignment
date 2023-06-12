package com.app.service;

import java.util.List;

import com.app.pojos.Categories;
import com.app.pojos.CategoryUser;
import com.app.pojos.Users;

public interface ICategoryUserService {

	String addCategoryUser(CategoryUser cu);
	List<Categories> getCategories(Users user);
	List<CategoryUser> getCategoryUsers(Users user);
	
	
}
