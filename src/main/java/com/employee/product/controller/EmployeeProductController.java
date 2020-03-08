package com.employee.product.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.employee.product.companydetails.dto.CompanyDetailsDto;
import com.employee.product.dao.services.EmployeeProductService;
import com.employee.product.entity.companydetails.CompanyDetails;
import com.employee.product.utils.CompanySignUpDetailsUtil;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController

@RequestMapping("/EProduct")
public class EmployeeProductController {
	
	@Autowired
	private EmployeeProductService employeeProductService;

	/**
	 * Method to insert the details of squad
	 * @param squadDetails
	 */
	@RequestMapping(method=RequestMethod.POST,value = "/companysignup")
	@ApiOperation(value = "Sign Up Company")
	@ApiResponses(value = {
            @ApiResponse(code = 200, message = "{\"response\":\"Successfully Signed Up\"}"),
            @ApiResponse(code = 401, message = "{\"response\":\"You are not authorized to sign Up\"}"),
            @ApiResponse(code = 403, message = "{\"response\":\"Accessing the resource you were trying to reach is forbidden\"}"),
            @ApiResponse(code = 404, message = "{\"response\":\"The resource you were trying to reach is not found\"}")
    }
    )
	public ResponseEntity signUpCompanyDetails(@RequestBody CompanyDetailsDto companyDetailsDto){
		 CompanyDetails companyDetails = new CompanyDetails();
		 CompanySignUpDetailsUtil.companySignUpDetailsMapping(companyDetailsDto, companyDetails);
		 employeeProductService.signUpCompanyDetails(companyDetails);		
		 return new ResponseEntity("{\"response\":\"Company SignUp is Successfully\"}", HttpStatus.OK);
	}

}
