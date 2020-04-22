import {EmployeeFamilyDetailsResponseDto} from './employeeFamilyDetailsResponseDto';
import {EmployeePassportDetailResponseDto} from './employeePassportDetailResponseDto';
import {EmployeeWorkPermitDetailsResponseDto} from './employeeWorkPermitDetailsResponseDto';

export class EmployeeDetailsResponseDto {
id: string;
firstName: string;
lastName: string;
emailId: string;
sex: string;
addressLine1: string;
addressLine2: string;
city: string;
state: string;
country:string;
contactNumber: string;
dateOfBirth: string;
reportingPerson: string;
jobRole:string;
workLocation:string;
department:string;
employeeWorkPermitDetailsResponseDto:EmployeeWorkPermitDetailsResponseDto[];
employeePassportDetailResponseDto:EmployeePassportDetailResponseDto[];
employeeFamilyDetailsResponseDto:EmployeeFamilyDetailsResponseDto[];

constructor(){}
}
