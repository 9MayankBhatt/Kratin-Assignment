package com.app.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Categories;
import com.app.pojos.CategoryUser;
import com.app.pojos.Users;

@Repository
public interface CategoryUserRepo extends JpaRepository<CategoryUser, Long>{

	List<Categories> findCategoriesByUser(Users user);
	List<CategoryUser> findByUser(Users user);
	
}
