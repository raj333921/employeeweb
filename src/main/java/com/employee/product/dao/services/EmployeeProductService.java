package com.employee.product.dao.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.product.dao.interfaces.CompanySignupDetailsInterface;
import com.employee.product.entity.companydetails.CompanyDetails;

@Service
public class EmployeeProductService {

	@Autowired
	private CompanySignupDetailsInterface companySignupDetailsInterface;
	
	/**
	 * method to save the squadDetails in DB
	 * @param squadDetails
	 */
	public void signUpCompanyDetails(CompanyDetails companyDetails){		
				
		companySignupDetailsInterface.save(companyDetails);
	}
	
}
