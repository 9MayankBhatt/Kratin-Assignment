package com.app.pojos;

import java.util.Set;
import java.util.TreeSet;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
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
@Table(name = "cat_tbl")
//@JsonIgnoreProperties({"CatUsers"})
public class Categories extends BaseEntity{
	
	@Enumerated(EnumType.STRING)
	@Column(name = "category")
	private CategoryName category;
	
	@Column(name = "file_name")
	private String fileName;
	
	@JsonIgnoreProperties(value = "category")
	@OneToOne(mappedBy = "category")
	private Doctors doctor;
	
	@JsonIgnoreProperties(value = "category")
	@OneToMany(mappedBy = "category", fetch = FetchType.EAGER)
	private Set<CategoryUser> CatUsers = new TreeSet<CategoryUser>();

}
