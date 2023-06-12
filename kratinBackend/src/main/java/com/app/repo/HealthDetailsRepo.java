package com.app.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.HealthDetails;
import com.app.pojos.Users;

@Repository
public interface HealthDetailsRepo extends JpaRepository<HealthDetails, Long>{

	List<HealthDetails> findByUserHealthDetails(Users user);
	
}
