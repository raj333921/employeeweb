package com.employee.product.dao.services;

import com.employee.product.entity.employeedetails.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

@Service
public class DocumentManagementService {

	@Autowired
	private EntityManager entity;

	@Transactional
	public void addWorkPermitDocument(EmployeeWorkPermitDocumentDetails employeeWorkPermitDocumentDetails) {
		EmployeeWorkPermitDetails employeeWorkPermitDetails = entity.find(EmployeeWorkPermitDetails.class,
				employeeWorkPermitDocumentDetails.getWorkPermitNumber());

		employeeWorkPermitDocumentDetails.setWorkpermit_number(employeeWorkPermitDetails);
		EmployeeWorkPermitDocumentDetails employeeWorkPermitDocumentDetailsRetrieval = entity
				.find(EmployeeWorkPermitDocumentDetails.class, employeeWorkPermitDocumentDetails.getWorkPermitNumber());
		if (null != employeeWorkPermitDocumentDetailsRetrieval) {

			employeeWorkPermitDocumentDetailsRetrieval
					.setDocumentData(employeeWorkPermitDocumentDetails.getDocumentData());
			employeeWorkPermitDocumentDetailsRetrieval
					.setDocumentName(employeeWorkPermitDocumentDetails.getDocumentName());
		} else {

			entity.persist(employeeWorkPermitDocumentDetails);
		}
	}

	@Transactional
	public void addPaySlipDocument(EmployeePaySlipDocumentDetails employeePaySlipDocumentDetails) {

		EmployeePaySlipDetails employeePaySlipDetails = entity.find(EmployeePaySlipDetails.class,
				employeePaySlipDocumentDetails.getPaySlipNumber());
		employeePaySlipDocumentDetails.setPayslip_number(employeePaySlipDetails);
		EmployeePaySlipDocumentDetails employeePaySlipDocumentDetailsRetrieval = entity
				.find(EmployeePaySlipDocumentDetails.class, employeePaySlipDocumentDetails.getPaySlipNumber());
		if (null != employeePaySlipDocumentDetailsRetrieval) {

			employeePaySlipDocumentDetailsRetrieval.setDocumentData(employeePaySlipDocumentDetails.getDocumentData());
			employeePaySlipDocumentDetailsRetrieval.setDocumentName(employeePaySlipDocumentDetails.getDocumentName());
		} else {

			entity.persist(employeePaySlipDocumentDetails);
		}
	}

	@Transactional
	public void addPassportDocument(EmployeePassportDocumentDetails employeePassportDocumentDetails) {

		EmployeePassportDetails employeePassportDetails = entity.find(EmployeePassportDetails.class,
				employeePassportDocumentDetails.getPassportNumber());
		employeePassportDocumentDetails.setPassport_number(employeePassportDetails);
		EmployeePassportDocumentDetails employeePassportDocumentDetailsRetrieval = entity
				.find(EmployeePassportDocumentDetails.class, employeePassportDocumentDetails.getPassportNumber());
		if (null != employeePassportDocumentDetailsRetrieval) {

			employeePassportDocumentDetailsRetrieval.setDocumentData(employeePassportDocumentDetails.getDocumentData());
			employeePassportDocumentDetailsRetrieval.setDocumentName(employeePassportDocumentDetails.getDocumentName());
		} else {
			entity.persist(employeePassportDocumentDetails);
		}
	}

	@Transactional
	public <T> Object downloadDocument(String documentNumber, String documentType) {

		if (documentType.equals("1")) {
			EmployeeWorkPermitDocumentDetails employeeWorkPermitDocumentDetails = entity
					.find(EmployeeWorkPermitDocumentDetails.class, documentNumber);
			return employeeWorkPermitDocumentDetails;
		} else if (documentType.equals("2")) {
			EmployeePaySlipDocumentDetails employeePaySlipDocumentDetails = entity
					.find(EmployeePaySlipDocumentDetails.class, documentNumber);
			return employeePaySlipDocumentDetails;
		} else if (documentType.equals("3")) {
			EmployeePassportDocumentDetails employeePassportDocumentDetails = entity
					.find(EmployeePassportDocumentDetails.class, documentNumber);
			return employeePassportDocumentDetails;
		}

		return null;
	}

}
