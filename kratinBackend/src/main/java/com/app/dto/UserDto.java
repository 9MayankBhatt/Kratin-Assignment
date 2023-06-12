package com.app.dto;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.Size;

import com.app.pojos.Role;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

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
	
}
