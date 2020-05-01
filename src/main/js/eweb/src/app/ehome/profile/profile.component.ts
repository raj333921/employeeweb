import { Component, OnInit } from '@angular/core';
import { EhomeDetails } from '../ehomeDetails';
import {StorageService} from '../../service/storage.service';
import { EwebcallService } from '../../service/ewebcall.service';
import {Router} from "@angular/router";
import { Validators } from '@angular/forms';
import {EmployeeDetailsRequestDto} from '../addemployee/employeeDetailsRequestDto';
import {EmployeeWorkPermitDetailsRequestDto} from '../addemployee/employeeWorkPermitDetailsRequestDto';
import {EmployeeFamilyDetailsRequestDto} from '../addemployee/employeeFamilyDetailsRequestDto';
import {EmployeePassportDetailRequestDto} from '../addemployee/employeePassportDetailRequestDto';
import {EmployeeWorkPermitDetailsResponseDto} from '../employeeWorkPermitDetailsResponseDto';
import {EmployeePassportDetailResponseDto} from '../employeePassportDetailResponseDto';
import {EmployeeFamilyDetailsResponseDto} from '../employeeFamilyDetailsResponseDto';
import {AddEmpReq} from '../addemployee/addEmpReq'

@Component({
selector: 'app-profile',
templateUrl: './profile.component.html',
styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
ehomeDetails: EhomeDetails = new EhomeDetails();
addEmpReq: AddEmpReq = null;
employeeDet: EmployeeDetailsRequestDto = new EmployeeDetailsRequestDto();
employeeWPD: EmployeeWorkPermitDetailsRequestDto = new EmployeeWorkPermitDetailsRequestDto();
employeeFDR: EmployeeFamilyDetailsRequestDto = new EmployeeFamilyDetailsRequestDto();
employeePDR: EmployeePassportDetailRequestDto = new EmployeePassportDetailRequestDto();
employeeWPDA: EmployeeWorkPermitDetailsRequestDto[] = [];
employeeFDRA: EmployeeFamilyDetailsRequestDto[] = [];
employeePDRA: EmployeePassportDetailRequestDto[] = [];
empWpd: EmployeeWorkPermitDetailsResponseDto = null;
empPdr: EmployeePassportDetailResponseDto = null;
empFdr: EmployeeFamilyDetailsResponseDto = null;
constructor(private ewebService: EwebcallService,private router: Router,private storageService: StorageService) { }

ngOnInit() {
    this.ehomeDetails = this.storageService.getEhomDetails();
    this.addEmpReq = new AddEmpReq();
    this.mapResToReq();
  }
  mapResToReq(){
    this.addEmpReq.adminuserName = this.ehomeDetails.userName;
    this.addEmpReq.companyId = this.ehomeDetails.companyId;
   if(this.ehomeDetails.employeeDetails.workPermitDetails.length > 0){
    for (this.empWpd of this.ehomeDetails.employeeDetails.workPermitDetails) {
      this.employeeWPD.init(this.empWpd.endDate,this.empWpd.startDate,this.empWpd.validity,this.empWpd.workPermitNumber);
       if (this.employeeWPDA.indexOf(this.employeeWPD) === -1){
          this.employeeWPDA.push(this.employeeWPD);
        }
    }
  }
    if(this.ehomeDetails.employeeDetails.passportDetails.length > 0){
    for (this.empPdr of this.ehomeDetails.employeeDetails.passportDetails) {
      this.employeePDR.init(this.empPdr.endDate,this.empPdr.issuePlace,this.empPdr.passportNumber,this.empPdr.startDate,this.empPdr.validity);
       if (this.employeePDRA.indexOf(this.employeePDR) === -1){
          this.employeePDRA.push(this.employeePDR);
        }
      }
    }

  if(this. ehomeDetails.employeeDetails.familyDetails.length > 0){
    for (this.empFdr of this.ehomeDetails.employeeDetails.familyDetails) {
      this.employeeFDR.init(this.empFdr.contactNumber,this.empFdr.firstName,this.empFdr.id,this.empFdr.lastName,this.empFdr.relation);
       if (this.employeeFDRA.indexOf(this.employeeFDR) === -1){
          this.employeeFDRA.push(this.employeeFDR);
        }
    }
  }

    this.employeeDet.init(this.ehomeDetails.employeeDetails.addressLine1,this.ehomeDetails.employeeDetails.addressLine2,this.ehomeDetails.employeeDetails.city,this.ehomeDetails.employeeDetails.contactNumber,this.ehomeDetails.employeeDetails.country,
  this.ehomeDetails.employeeDetails.dateOfBirth,this.ehomeDetails.employeeDetails.department,this.ehomeDetails.employeeDetails.emailId,this.ehomeDetails.employeeDetails.firstName,this.ehomeDetails.employeeDetails.id,this.ehomeDetails.employeeDetails.jobRole,this.ehomeDetails.employeeDetails.lastName,this.ehomeDetails.employeeDetails.reportingPerson,this.ehomeDetails.employeeDetails.sex,this.ehomeDetails.employeeDetails.state,this.ehomeDetails.employeeDetails.workLocation,this.employeeWPDA,this.employeeFDRA,this.employeePDRA);
    this.addEmpReq.employeeDetails = this.employeeDet;
    console.log(JSON.stringify(this.addEmpReq));
  }

    onSubmit() {
      //this.submitted = true;
      this.saveMe();
    }

saveMe() {
      this.ewebService.addModifyEmp(this.addEmpReq).then(
            (result) => {
                console.log(result);
            },
        err => {
             // this.error = true;
              console.log(err);
          }
      );
  }
}
