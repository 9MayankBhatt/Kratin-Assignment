package com.app.pojos;

import java.time.LocalDate;
import java.util.Set;
import java.util.TreeSet;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//@JsonInclude(Include.NON_EMPTY)
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users_tbl")
//@JsonIgnoreProperties({"healthDetails", "CatUser"})
public class Users extends BaseEntity{
	
	@Column(name = "first_name", length = 25, nullable = false)
	private String firstName;
	
	@Column(name = "last_name", length = 25, nullable = false)
	private String lastName;
	
	@Column(name = "email", length = 25, nullable = false, unique = true)
	private String email;
	
	@JsonProperty(access = Access.WRITE_ONLY)
	@Column(name = "password", length = 25, nullable = false)
	private String password;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private Role role;
	
	@Column(name = "dob", nullable = false)
	private LocalDate dob;
	
	@Column(name = "gender")
	@Size(min = 1, max = 1)
	private String gender;
	
	@JsonIgnoreProperties(value = "userHealthDetails")
	@OneToMany(mappedBy = "userHealthDetails", fetch = FetchType.EAGER)
	private Set<HealthDetails> healthDetails = new TreeSet<HealthDetails>();
	
	@JsonIgnoreProperties(value = "user")
	@OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
	private Set<CategoryUser> CatUser = new TreeSet<CategoryUser>();
	

}
