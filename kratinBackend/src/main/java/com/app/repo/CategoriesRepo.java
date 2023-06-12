package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Categories;
import com.app.pojos.CategoryName;

@Repository
public interface CategoriesRepo extends JpaRepository<Categories, Long>{

	Categories findByCategory(CategoryName categoryName);
	
}
