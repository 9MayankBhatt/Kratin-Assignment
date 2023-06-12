package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

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
@Table(name = "doctors_tbl")
public class Doctors extends BaseEntity{
	
	@Column(name = "name", length = 25, nullable = false)
	private String name;
	
	@Column(name = "mobile", length = 13, nullable = false)
	private String mobile;
	
	@Column(name = "address", length = 100, nullable = false)
	private String address;
	
	@JsonIgnoreProperties(value = "doctor")
	@OneToOne
	@JoinColumn(name = "cat_id", nullable = false)
	private Categories category;

}
