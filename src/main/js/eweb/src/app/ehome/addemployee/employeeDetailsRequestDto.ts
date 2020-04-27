import {EmployeeFamilyDetailsRequestDto} from './employeeFamilyDetailsRequestDto';
import {EmployeePassportDetailRequestDto} from './employeePassportDetailRequestDto';
import {EmployeeWorkPermitDetailsRequestDto} from './employeeWorkPermitDetailsRequestDto';

export class EmployeeDetailsRequestDto{
addressLine1: string;
addressLine2: string;
city: string;
contactNumber:string;
country:string;
dateOfBirth:string;
department:string;
emailId:string;
firstName:string;
id: string;
jobRole: string;
lastName: string;
reportingPerson: string;
sex: string;
state: string;
workLocation: string;
employeeFamilyDetailsRequestDto: EmployeeFamilyDetailsRequestDto[];
employeePassportDetailRequestDto: EmployeePassportDetailRequestDto[];
employeeWorkPermitDetailsRequestDto: EmployeeWorkPermitDetailsRequestDto[];
constructor(){}
init(addressLine1: string,addressLine2: string,
city: string,
contactNumber:string,
country:string,
dateOfBirth:string,
department:string,
emailId:string,
firstName:string,
id: string,
jobRole: string,
lastName: string,
reportingPerson: string,
sex: string,
state: string,
workLocation: string,
employeeWorkPermitDetailsRequestDto: EmployeeWorkPermitDetailsRequestDto[],
employeeFamilyDetailsRequestDto: EmployeeFamilyDetailsRequestDto[],
employeePassportDetailRequestDto: EmployeePassportDetailRequestDto[]){
 this.addressLine1 = addressLine1;
 this.addressLine2 = addressLine2;
 this.city = city;
 this.contactNumber = contactNumber;
 this.country = country;
 this.dateOfBirth = dateOfBirth;
this.department = department;
this.emailId = emailId;
this.firstName = firstName;
this.id = id;
this.jobRole = jobRole;
this.lastName = lastName;
this.reportingPerson = reportingPerson;
this.sex = sex;
this.state = state;
this.workLocation = workLocation;
this.employeeWorkPermitDetailsRequestDto = employeeWorkPermitDetailsRequestDto;
this.employeeFamilyDetailsRequestDto=employeeFamilyDetailsRequestDto;
this.employeePassportDetailRequestDto=employeePassportDetailRequestDto;
}
}
