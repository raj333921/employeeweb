import {EmpFam} from './empFam';
import {EmpPass} from './empPass';
import {EmpWPD} from './empWPD';

export class EmployeeDetailsRequestDto{
addressLine1: string;
addressLine2: string;
city: string;
contactNumber:string;
country:string;
dateOfBirth:string;
department:string;
emailId:string;
employeeFamilyDetailsRequestDto: EmpFam;
employeePassportDetailRequestDto: EmpPass;
employeeWorkPermitDetailsRequestDto:EmpWPD;
firstName:string;
id: string;
jobRole: string;
lastName: string;
reportingPerson: string;
sex: string;
state: string;
workLocation: string;
}
