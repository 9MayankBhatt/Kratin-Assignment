package com.app.pojos;

import javax.persistence.Column;
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
@Table(name = "health_dtls")
public class HealthDetails extends BaseEntity{
	
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

	@JsonIgnoreProperties(value = "healthDetails")
	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	private Users userHealthDetails;

}
