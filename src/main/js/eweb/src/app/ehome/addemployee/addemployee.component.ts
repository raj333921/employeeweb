import { Component, OnInit } from '@angular/core';
import {AddEmpDet} from './addEmpDet';
import {AddEmpRes} from './addEmpRes';
import {EmployeeDetailsRequestDto} from './employeeDetailsRequestDto'
import {EmployeePassportDetailRequestDto} from './employeePassportDetailRequestDto';
import {EmployeeFamilyDetailsRequestDto} from './employeeFamilyDetailsRequestDto';
import {EmployeeWorkPermitDetailsRequestDto} from './employeeWorkPermitDetailsRequestDto';
import { EhomeDetails } from '../ehomeDetails';
import {StorageService} from '../../service/storage.service';
import { EwebcallService } from '../../service/ewebcall.service';
import {Router} from "@angular/router";

@Component({
selector: 'app-addemployee',
templateUrl: './addemployee.component.html',
styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
empDet : AddEmpDet = new AddEmpDet();
private ehomeDetails: EhomeDetails = new EhomeDetails();
empWpd: EmployeeWorkPermitDetailsRequestDto = new EmployeeWorkPermitDetailsRequestDto();
empPass: EmployeePassportDetailRequestDto = new EmployeePassportDetailRequestDto();
empFd: EmployeeFamilyDetailsRequestDto = new EmployeeFamilyDetailsRequestDto();
empDataPass: EmployeePassportDetailRequestDto[] = [];
empDataWpd: EmployeeWorkPermitDetailsRequestDto[] = [];
empDataFd: EmployeeFamilyDetailsRequestDto[] = [];
submitted = false;
error = false;
success = false;
id = "0";
addEmpRes: EmployeeDetailsRequestDto = new EmployeeDetailsRequestDto();
constructor(private ewebService: EwebcallService,private router: Router,private storageService: StorageService) { }

  ngOnInit() {
    this.ehomeDetails = this.storageService.getEhomDetails();
  }

 saveMe() {
       console.log(this.empDet);
      this.empDet.adminuserName = this.ehomeDetails.userName;
      this.empDet.companyId = this.ehomeDetails.companyId;
      console.log(this.empPass);
      if(this.empPass != null){
          this.empDataPass.push(this.empPass);
          this.empDet.employeeDetailsRequestDto.employeePassportDetailRequestDto = this.empDataPass;
      }
      if(this.empWpd != null){
          this.empDataWpd.push(this.empWpd);
          this.empDet.employeeDetailsRequestDto.employeeWorkPermitDetailsRequestDto = this.empDataWpd;
      }
      if(this.empFd != null){
          this.empDataFd.push(this.empFd);
          this.empDet.employeeDetailsRequestDto.employeeFamilyDetailsRequestDto = this.empDataFd;
      }
      if(this.id != "0"){
          this.empDet.employeeDetailsRequestDto.id= this.id;
      }

      this.ewebService.addModifyEmp(this.empDet).then(
            (result) => {
                this.addEmpRes = result;
                this.id = this.addEmpRes.id;
            },
        err => {
              this.error = true;
              console.log(err);
          }
      );
}

      get isValidEr() {
          this.success = false;
          return this.error;
      }

      get isValidSu() {
          this.error = false;
          return this.success;
      }

    onSubmit() {
      this.submitted = true;
      this.saveMe();
    }


}
