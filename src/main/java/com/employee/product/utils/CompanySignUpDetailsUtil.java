package com.employee.product.utils;


import java.util.HashSet;
import java.util.Set;

import com.employee.product.companydetails.dto.CompanyDetailsDto;
import com.employee.product.employeedetails.dto.EmployeeDetailsDto;
import com.employee.product.entity.companydetails.CompanyDetails;
import com.employee.product.entity.companydetails.Users;
import com.employee.product.entity.employeedetails.EmployeeDetails;

public class CompanySignUpDetailsUtil {
	
	public static void companySignUpDetailsMapping (CompanyDetailsDto companyDetailsDto, CompanyDetails companyDetails) {
		
		companyDetails.setCompanyName(companyDetailsDto.getCompanyName());
		companyDetails.setEmailId(companyDetailsDto.getEmailId());
		companyDetails.setAddressLineOne(companyDetailsDto.getAddressLineOne());
		companyDetails.setAddressLineTwo(companyDetailsDto.getAddressLineTwo());
		companyDetails.setCity(companyDetailsDto.getCity());
		companyDetails.setState(companyDetailsDto.getState());
		companyDetails.setCountry(companyDetailsDto.getCountry());
		companyDetails.setContactNumber(companyDetailsDto.getContactNumber());
		companyDetails.setSizeOfTheCompany(companyDetailsDto.getSizeOfTheCompany());
		companyDetails.setActive(companyDetailsDto.getActive());
		
	    userDetailsMapping(companyDetailsDto, companyDetails);
	    
	}

	private static void userDetailsMapping(CompanyDetailsDto companyDetailsDto, CompanyDetails companyDetails) {
		
		Set<Users> usersSet = new HashSet<Users>();
		Users users = new Users();
		users.setActive(companyDetailsDto.getActive());
		users.setUserName(companyDetailsDto.getEmailId());
		if(null != companyDetailsDto.getEmployeeDetails()) {
		users.setFirstName(companyDetailsDto.getEmployeeDetails().getFirstName());
		users.setLastName(companyDetailsDto.getEmployeeDetails().getLastName());
		users.setCountry(companyDetailsDto.getEmployeeDetails().getCountry());
		}
		users.setPassword(companyDetailsDto.getPassword());
		users.setRole("Admin");
		users.setActive(1);
		employeeDetailsMapping(users,companyDetailsDto);
		usersSet.add(users);
		companyDetails.setUsers(usersSet);
		
		
		
	}
	
	private static void employeeDetailsMapping(Users users, CompanyDetailsDto companyDetailsDto) {
		
		Set<EmployeeDetails> employeeDetailsSet = new HashSet<EmployeeDetails>();
		EmployeeDetails employeeDetails = new EmployeeDetails();
		
		EmployeeDetailsDto employeeDetailsDto = companyDetailsDto.getEmployeeDetails();
		
		employeeDetails.setFirstName(employeeDetailsDto.getFirstName());
		employeeDetails.setLastName(employeeDetailsDto.getLastName());
		employeeDetails.setEmailId(companyDetailsDto.getEmailId());
		employeeDetails.setState(companyDetailsDto.getState());
		employeeDetails.setCountry(companyDetailsDto.getCountry());
		employeeDetails.setContactNumber(companyDetailsDto.getContactNumber());
		
		employeeDetailsSet.add(employeeDetails);
		
		users.setEmployeeDetails(employeeDetailsSet);
		
		
	}
}
