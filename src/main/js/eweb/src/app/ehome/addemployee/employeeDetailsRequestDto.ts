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
employeeFamilyDetailsRequestDto: EmployeeFamilyDetailsRequestDto[];
employeePassportDetailRequestDto: EmployeePassportDetailRequestDto[];
employeeWorkPermitDetailsRequestDto: EmployeeWorkPermitDetailsRequestDto[];
firstName:string;
id: string;
jobRole: string;
lastName: string;
reportingPerson: string;
sex: string;
state: string;
workLocation: string;
}
