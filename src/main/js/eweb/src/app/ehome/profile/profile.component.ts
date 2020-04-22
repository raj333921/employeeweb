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
   // console.log(JSON.stringify(this.ehomeDetails.employeeDetailsResponseDto));
    //console.log(JSON.stringify(this.addEmpReq));
    this.mapResToReq();
  }
  mapResToReq(){
    this.addEmpReq.adminuserName = this.ehomeDetails.userName;
    this.addEmpReq.companyId = this.ehomeDetails.companyId;
   if(this.ehomeDetails.employeeDetailsResponseDto.employeeWorkPermitDetailsResponseDto.length > 0){
    for (this.empWpd of this.ehomeDetails.employeeDetailsResponseDto.employeeWorkPermitDetailsResponseDto) {
      this.employeeWPD.init(this.empWpd.documentData,this.empWpd.documentName,this.empWpd.endDate,this.empWpd.startDate,this.empWpd.validity,this.empWpd.workPermitNumber);
       if (this.employeeWPDA.indexOf(this.employeeWPD) === -1){
          this.employeeWPDA.push(this.employeeWPD);
        }
    }
  }
    if(this.ehomeDetails.employeeDetailsResponseDto.employeePassportDetailResponseDto.length > 0){
    for (this.empPdr of this.ehomeDetails.employeeDetailsResponseDto.employeePassportDetailResponseDto) {
      this.employeePDR.init(this.empPdr.endDate,this.empPdr.issuePlace,this.empPdr.passportNumber,this.empPdr.startDate,this.empPdr.validity);
       if (this.employeePDRA.indexOf(this.employeePDR) === -1){
          this.employeePDRA.push(this.employeePDR);
        }
      }
    }

  if(this. ehomeDetails.employeeDetailsResponseDto.employeeFamilyDetailsResponseDto.length > 0){
    for (this.empFdr of this.ehomeDetails.employeeDetailsResponseDto.employeeFamilyDetailsResponseDto) {
      this.employeeFDR.init(this.empFdr.contactNumber,this.empFdr.firstName,this.empFdr.id,this.empFdr.lastName,this.empFdr.relation);
       if (this.employeeFDRA.indexOf(this.employeeFDR) === -1){
          this.employeeFDRA.push(this.employeeFDR);
        }
    }
  }

    this.employeeDet.init(this.ehomeDetails.employeeDetailsResponseDto.addressLine1,this.ehomeDetails.employeeDetailsResponseDto.addressLine2,this.ehomeDetails.employeeDetailsResponseDto.city,this.ehomeDetails.employeeDetailsResponseDto.contactNumber,this.ehomeDetails.employeeDetailsResponseDto.country,
  this.ehomeDetails.employeeDetailsResponseDto.dateOfBirth,this.ehomeDetails.employeeDetailsResponseDto.department,this.ehomeDetails.employeeDetailsResponseDto.emailId,this.ehomeDetails.employeeDetailsResponseDto.firstName,this.ehomeDetails.employeeDetailsResponseDto.id,this.ehomeDetails.employeeDetailsResponseDto.jobRole,this.ehomeDetails.employeeDetailsResponseDto.lastName,this.ehomeDetails.employeeDetailsResponseDto.reportingPerson,this.ehomeDetails.employeeDetailsResponseDto.sex,this.ehomeDetails.employeeDetailsResponseDto.state,this.ehomeDetails.employeeDetailsResponseDto.workLocation,this.employeeWPDA,this.employeeFDRA,this.employeePDRA);
    this.addEmpReq.employeeDetailsRequestDto = this.employeeDet;
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
