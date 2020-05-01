DROP DATABASE employeeproduct;
CREATE DATABASE employeeproduct;
CREATE TABLE employeeproduct.users (
  `user_name` varchar(255) PRIMARY KEY,
    `first_name` varchar(255),
    `last_name` varchar(255),
    `password` varchar(255),
    `role` varchar(255),
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `country` varchar(255),
    `company_id` int,
    `active` int
);

CREATE TABLE employeeproduct.employee (
  `id` int PRIMARY KEY AUTO_INCREMENT,
    `first_name` varchar(255),
    `last_name` varchar(255),
    `email_id` varchar(255) UNIQUE,
    `sex` varchar(255),
    `address1` varchar(255),
    `address2` varchar(255),
    `city` varchar(255),
    `state` varchar(255),
    `country` varchar(255),
    `contact_number` varchar(255),
    `date_of_birth` date,
    `updated_by` varchar(255),
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `company_id` int,
    `job_role` varchar(255),
    `work_location` varchar(255),
    `department` varchar(255),
    `reporting_person`  varchar(255)
);

CREATE TABLE employeeproduct.workpermit_details (
  `employee_id` int,
  `workpermit_number` varchar(255) PRIMARY KEY,
  `start_date` date,
  `end_date` date,
  `validity` int
);

CREATE TABLE employeeproduct.workpermit_document_details (
  `workpermit_number` varchar(255) PRIMARY KEY,
  `document_name` varchar(255),
  `document_data` longblob
);


CREATE TABLE employeeproduct.payslip_details (
  `payslip_number` varchar(255) PRIMARY KEY,
  `employee_id` int,
  `payslip_month` varchar(255)
);

CREATE TABLE employeeproduct.payslip_document_details (
  `payslip_number` varchar(255) PRIMARY KEY,
  `document_name` varchar(255),
  `document_data` longblob
);

CREATE TABLE employeeproduct.passport_details (
  `employee_id` int,
  `passport_number` varchar(255) PRIMARY KEY,
  `start_date` date,
  `end_date` date,
  `issue_place` varchar(255),
  `validity` int
);

CREATE TABLE employeeproduct.family_details (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `employee_id` int,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `relation` int,
  `contact_number` varchar(255)
);

CREATE TABLE employeeproduct.passport_document_details (
  `passport_number` varchar(255) PRIMARY KEY,
  `document_name` varchar(255),
  `document_data` longblob
);


CREATE TABLE employeeproduct.company (
   `id` int PRIMARY KEY AUTO_INCREMENT,
    `name` varchar(255) UNIQUE,
    `email_id` varchar(255),
    `address1` varchar(255),
    `address2` varchar(255),
    `city` varchar(255),
    `state` varchar(255),
    `country` varchar(255),
    `contact_number` varchar(255),
    `size` int,
    `active` int
);

CREATE TABLE employeeproduct.Audit_Trial (
   `id` int PRIMARY KEY AUTO_INCREMENT,
    `updated_by` varchar(255),
    `updated_user` varchar(255),
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `updated_company` varchar(255)
);

ALTER TABLE employeeproduct.employee
ADD repoting_person varchar(255);
ALTER TABLE employeeproduct.employee add column active integer;

DROP INDEX email_id ON employee;

ALTER TABLE employee ADD CONSTRAINT email_id UNIQUE(email_id, active);


ALTER TABLE employeeproduct.users ADD FOREIGN KEY (`company_id`) REFERENCES employeeproduct.company (`id`);

ALTER TABLE employeeproduct.employee ADD FOREIGN KEY (`updated_by`) REFERENCES employeeproduct.users (`user_name`);

ALTER TABLE employeeproduct.employee ADD FOREIGN KEY (`company_id`) REFERENCES employeeproduct.company (`id`);

ALTER TABLE employeeproduct.workpermit_details ADD FOREIGN KEY (`employee_id`) REFERENCES employeeproduct.employee (`id`);

ALTER TABLE employeeproduct.workpermit_document_details ADD FOREIGN KEY (`workpermit_number`) REFERENCES employeeproduct.workpermit_details (`workpermit_number`);

ALTER TABLE employeeproduct.payslip_details ADD FOREIGN KEY (`employee_id`) REFERENCES employeeproduct.employee (`id`);

ALTER TABLE employeeproduct.payslip_document_details ADD FOREIGN KEY (`payslip_number`) REFERENCES employeeproduct.payslip_details (`payslip_number`);

ALTER TABLE employeeproduct.passport_details ADD FOREIGN KEY (`employee_id`) REFERENCES employeeproduct.employee (`id`);

ALTER TABLE employeeproduct.family_details ADD FOREIGN KEY (`employee_id`) REFERENCES employeeproduct.employee (`id`);

ALTER TABLE employeeproduct.passport_document_details ADD FOREIGN KEY (`passport_number`) REFERENCES employeeproduct.passport_details (`passport_number`);


