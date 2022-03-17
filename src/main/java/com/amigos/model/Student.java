package com.amigos.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Column;

import com.amigos.util.JsonDate;

@Entity
@Table(name="STUDENT")
public class Student implements java.io.Serializable
{
	private static final long serialVersionUID=1;
	
	@Id
	@Column(name="STUDENT_ID")
	@GeneratedValue(generator="STUDENT_SEQ")
	@SequenceGenerator(name="STUDENT_SEQ",sequenceName="STUDENT_SEQ", allocationSize=1)
	private int id;
	
	@Column(name="STUDENT_NAME")	
	private String name;
	
	@Column(name="DOA")
	@JsonDeserialize(using=JsonDate.class)
	private Date doa;
	
	@Column(name="PHYSICS")
	private double physics;
	
	@Column(name="CHEMISTRY")
	private double chemistry;
	
	@Column(name="BIOLOGY")
	private double biology;
	
	public Student() {
		super();
	}
	
	public Student(int id, String name, Date doa, double physics, double chemistry, double biology) {
		super();
		this.id = id;
		this.name = name;
		this.doa = doa;
		this.physics = physics;
		this.chemistry = chemistry;
		this.biology = biology;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getDoa() {
		return doa;
	}

	public void setDoa(Date doa) {
		this.doa = doa;
	}

	public double getPhysics() {
		return physics;
	}

	public void setPhysics(double physics) {
		this.physics = physics;
	}

	public double getChemistry() {
		return chemistry;
	}

	public void setChemistry(double chemistry) {
		this.chemistry = chemistry;
	}

	public double getBiology() {
		return biology;
	}

	public void setBiology(double biology) {
		this.biology = biology;
	}

	@Override
	public String toString() {
		return String.format("Student [id=%s, name=%s, doa=%s, physics=%s, chemistry=%s, biology=%s]",
				id, name, doa, physics, chemistry, biology);
	}	
}
