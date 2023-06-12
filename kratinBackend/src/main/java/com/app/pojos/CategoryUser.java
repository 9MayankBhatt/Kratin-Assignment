package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "cat_user_tbl")
public class CategoryUser extends BaseEntity{
	
	@JsonIgnoreProperties(value = "CatUser")
	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	private Users user;
	
	@JsonIgnoreProperties(value = "CatUsers")
	@ManyToOne
	@JoinColumn(name = "cat_id", nullable = false)
	private Categories category;

}
