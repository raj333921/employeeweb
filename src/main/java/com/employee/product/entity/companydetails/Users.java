package com.employee.product.entity.companydetails;

import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.employee.product.entity.employeedetails.EmployeeDetails;

import lombok.Data;

@Entity
@Data
@Table(name = "users")
public class Users {
	
	@Id
	@Column(name= "user_name")
	private String userName;
	@Column(name= "first_name")
	private String firstName;
	@Column(name= "last_name")
	private String lastName;
	@Column(name= "password")
	private String password;
	@Column(name= "role")
	private String role;
	@Column(name= "created_At" ,nullable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private Date createdAt;
	@Column(name= "country")
	private String country;
	@Column(name= "active")
	private int active;
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="updated_by")
	private Set<EmployeeDetails> employeeDetails;

	

}