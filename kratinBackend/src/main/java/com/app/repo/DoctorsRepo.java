package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Categories;
import com.app.pojos.Doctors;

@Repository
public interface DoctorsRepo extends JpaRepository<Doctors, Long>{
	
	Doctors findByCategory(Categories category);

}
