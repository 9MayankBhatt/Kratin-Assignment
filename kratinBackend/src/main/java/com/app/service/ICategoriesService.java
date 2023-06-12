package com.app.service;

import com.app.pojos.Categories;
import com.app.pojos.CategoryName;

public interface ICategoriesService {
	
	Categories getCategoryByCat(CategoryName categoryName);

}
