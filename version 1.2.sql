CREATE DATABASE springboot;

CREATE TABLE `springboot`.`users` (
  `user_name` varchar(255) PRIMARY KEY,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `password` varchar(255),
  `role` varchar(255),
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `country` varchar(255),
  `company_id` int,
  `active` int
);

CREATE TABLE `springboot`.`employee` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `email_id` varchar(255),
  `sex` varchar(255),
  `address1` varchar(255),
  `address2` varchar(255),
  `city` varchar(255),
  `state` varchar(255),
  `country` varchar(255),
  `contact_number` varchar(255),
  `date_of_birth` date,
  `updated_by` varchar(255),
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `springboot`.`employee_office_details` (
  `employee_id` int NOT NULL PRIMARY KEY,
  `reporting_person_id` int NOT NULL,
  `job_role` varchar(255),
  `work_location` varchar(255),
  `department` varchar(255)
);

CREATE TABLE `springboot`.`workpermit_details` (
  `employee_id` int NOT NULL,
  `workpermit_number` varchar(255) PRIMARY KEY,
  `start_date` date,
  `end_date` date,
  `validity` int
);

CREATE TABLE `springboot`.`workpermit_document_details` (
  `workpermit_number` varchar(255) NOT NULL,
  `document_name` varchar(255),
  `document_data` varchar(255)
);

CREATE TABLE `springboot`.`payslip_document_details` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `document_name` varchar(255),
  `employee_id` int NOT NULL,
  `payslip_month` varchar(255)
);

CREATE TABLE `springboot`.`passport_details` (
  `employee_id` int NOT NULL,
  `passport_number` varchar(255) PRIMARY KEY,
  `start_date` date,
  `end_date` date,
  `issue_place` varchar(255),
  `validity` int
);

CREATE TABLE `springboot`.`family_details` (
  `employee_id` int NOT NULL,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `relation` int,
  `contact_number` varchar(255)
);

CREATE TABLE `springboot`.`company` (
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

CREATE TABLE `springboot`.`audit_trial` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `updated_by` varchar(255),
  `updated_user` varchar(255),
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_company` varchar(255)
);

ALTER TABLE `users` ADD FOREIGN KEY (`company_id`) REFERENCES `company` (`id`);

ALTER TABLE `employee` ADD FOREIGN KEY (`updated_by`) REFERENCES `users` (`user_name`);

ALTER TABLE `employee_office_details` ADD FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`);

ALTER TABLE `employee_office_details` ADD FOREIGN KEY (`reporting_person_id`) REFERENCES `employee` (`id`);

ALTER TABLE `workpermit_details` ADD FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`);

ALTER TABLE `workpermit_document_details` ADD FOREIGN KEY (`workpermit_number`) REFERENCES `workpermit_details` (`workpermit_number`);

ALTER TABLE `payslip_document_details` ADD FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`);

ALTER TABLE `passport_details` ADD FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`);

ALTER TABLE `family_details` ADD FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`);

-- insert Queries

-- Company Table : 
INSERT INTO `springboot`.`company` (`id`, `name`, `email_id`, `address1`, `address2`, `city`, `state`, `country`, `contact_number`, `size`, `active`) VALUES ('1', 'Balachandar Gopalan', 'ergbalachandar@gmail.com', 'Mahalakshmi Nagar', '6th cross street', 'chennai', 'tamilNadu', 'India', '9410', '0', '0');

-- Users Table : 
INSERT INTO `springboot`.`users` (`user_name`, `first_name`, `last_name`, `password`, `role`, `country`, `company_id`, `active`) VALUES ('ergbalachandar@gmail.com', 'Balachandar', 'Gopalan', 'Shyamgops@1', '0', 'India', '1', '0');

-- Employee Table : 
INSERT INTO `springboot`.`employee` (`id`, `first_name`, `last_name`, `email_id`, `sex`, `address1`, `address2`, `city`, `state`, `country`, `contact_number`, `date_of_birth`) VALUES ('1', 'Balachandar', 'Gopalan', 'ergbalachandar@gmail.com', 'M', 'Address1', 'Address2', 'Chennai', 'TamilNadu', 'India', '9884941049', '1990-08-30');

-- WorkPermitDetails Table : 
INSERT INTO `springboot`.`workpermit_details` (`employee_id`, `workpermit_number`, `start_date`, `end_date`, `validity`) VALUES ('1', '12345678', '2020-01-08', '2023-01-07', 1);

INSERT INTO `springboot`.`workpermit_details` (`employee_id`, `workpermit_number`, `start_date`, `end_date`, `validity`) VALUES ('1', '2345677', '2018-01-08', '2020-01-07', 0);


--  passport_Details Table 
INSERT INTO `springboot`.`passport_details` (`employee_id`, `passport_number`, `start_date`, `end_date`, `issue_place`, `validity`) VALUES ('1', 'sdfsdfsdf', '2011-08-30', '2021-07-31', 'Chennai', '1');

INSERT INTO `springboot`.`passport_details` (`employee_id`, `passport_number`, `start_date`, `end_date`, `issue_place`, `validity`) VALUES ('1', 'sadfdfdf', '2001-08-31', '2011-07-31', 'Chennai', '0');

--  workpermit_document_details
INSERT INTO `springboot`.`workpermit_document_details` (`workpermit_number`, `document_name`, `document_data`) VALUES ('12345678', 'sadfdfdf', 'sdfsadfdsaffas');

--  payslip_document_details
INSERT INTO `springboot`.`payslip_document_details` (`id`, `document_name`, `employee_id`) VALUES ('1', 'payslip', '1');

--  employee_office_details
INSERT INTO `springboot`.`employee_office_details` (`employee_id`,`reporting_person_id`, `job_role`, `work_location`,`department`) VALUES (1, 1, 'developer', 'brussels','information technology');
 
--  family_details
INSERT INTO `springboot`.`family_details` (`employee_id`,`first_name`, `last_name`, `relation`,`contact_number`) VALUES ('1', 'asjdfkjds', 'adfasdfds', '0','9884941049');

--   Audit_trial table
INSERT INTO `springboot`.`audit_trial` (`id`, `updated_by`, `updated_user`) VALUES ('1', 'dsafdsf', 'asdfasdf');

