import { Component, OnInit } from '@angular/core';
import {AddEmpDet} from './addEmpDet';
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
imageError = "";
error = false;
success = false;
id = "0";
files: any[];
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
      if(this.empPass != null && JSON.stringify(this.empPass) != "{}"){
         if (this.empDataPass.indexOf(this.empPass) === -1){
          this.empDataPass.push(this.empPass);
          this.empDet.employeeDetailsRequestDto.employeePassportDetailRequestDto = this.empDataPass;
        }
      }
      if(this.empWpd != null && JSON.stringify(this.empWpd) != "{}"){
          if (this.empDataWpd.indexOf(this.empWpd) === -1){
          this.empDataWpd.push(this.empWpd);
          this.empDet.employeeDetailsRequestDto.employeeWorkPermitDetailsRequestDto = this.empDataWpd;
        }
      }
      if(this.empFd != null && JSON.stringify(this.empFd) != "{}"){
         if (this.empDataFd.indexOf(this.empFd) === -1){
          this.empDataFd.push(this.empFd);
          this.empDet.employeeDetailsRequestDto.employeeFamilyDetailsRequestDto = this.empDataFd;
        }
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

  getBase64(file) {
   var reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = (e) => {
      this.empWpd.documentData = reader.result;
     //console.log(reader.result);
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
}


  onFileChange(event){
    let af = ['image/png', 'image/jpeg','application/pdf']
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // console.log(file);
     /* if (!_.includes(af, file.type)) {
        alert('Only PNG/JPEG/PDF formats Allowed!');
        this.imageError = 'Only Images are allowed ( JPG | PNG | PDF )';
        return false
      }*/

        this.empWpd.documentName = file.name;
        this.getBase64(file);
      }
    }

}
