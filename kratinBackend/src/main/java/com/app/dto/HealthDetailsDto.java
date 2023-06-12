package com.app.dto;

import javax.persistence.Column;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class HealthDetailsDto {
	
	@Column(name = "bp_systolic")
	private int bpSys;
	
	@Column(name = "bp_diastolic")
	private int bpDia;
	
	@Column(name = "heart_rate")
	private int heartRate;
	
	@Column(name = "chol_lvl")
	private int cholestrolLevel;
	 
	@Column(name = "height")
	private long height;
	
	@Column(name = "weight")
	private long weight;


}
