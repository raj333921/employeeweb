import { Component, OnInit } from '@angular/core';
import {AddEmpReq} from './addEmpReq';
import {EmployeeDetailsRequestDto} from './employeeDetailsRequestDto'
import {EmployeePassportDetailRequestDto} from './employeePassportDetailRequestDto';
import {EmployeeFamilyDetailsRequestDto} from './employeeFamilyDetailsRequestDto';
import {EmployeeWorkPermitDetailsRequestDto} from './employeeWorkPermitDetailsRequestDto';
import { EhomeDetails } from '../ehomeDetails';
import {StorageService} from '../../service/storage.service';
import { EwebcallService } from '../../service/ewebcall.service';
import {Router} from '@angular/router';
import * as _ from 'lodash';


@Component({
selector: 'app-addemployee',
templateUrl: './addemployee.component.html',
styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
empDet : AddEmpReq = new AddEmpReq();
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
value = "";
files: any[];
file="";
valuePass="";
filePass="";
addEmpReq: EmployeeDetailsRequestDto = new EmployeeDetailsRequestDto();
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
      if(this.addEmpReq != null){
          this.empDet.employeeDetails = this.addEmpReq;
      }
      if(this.empPass != null && JSON.stringify(this.empPass) != "{}"){
         if (this.empDataPass.indexOf(this.empPass) === -1){
          this.empDataPass.push(this.empPass);
          this.empDet.employeeDetails.passportDetails = this.empDataPass;
        }
      }
      if(this.empWpd != null && JSON.stringify(this.empWpd) != "{}"){
          if (this.empDataWpd.indexOf(this.empWpd) === -1){
          this.empDataWpd.push(this.empWpd);
          this.empDet.employeeDetails.workPermitDetails = this.empDataWpd;
        }
      }
      if(this.empFd != null && JSON.stringify(this.empFd) != "{}"){
         if (this.empDataFd.indexOf(this.empFd) === -1){
          this.empDataFd.push(this.empFd);
          this.empDet.employeeDetails.familyDetails = this.empDataFd;
        }
      }

      if(this.id != "0"){
          this.empDet.employeeDetails.id= this.id;
      }

      this.ewebService.addModifyEmp(this.empDet).then(
            (result) => {
                this.addEmpRes = result;
                this.id = this.addEmpRes.id;
                this.navigato();
            },
        err => {
              this.error = true;
              console.log(err);
          }
      );
}
    navigato(){
      if(this.empWpd != null){
          this.callUpload(this.value,this.file);
      }
      if(this.empPass != null){
          this.callUpload(this.valuePass,this.filePass);
      }
      alert("Employee added successfully");
      this.router.navigate(['/employee']);
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


  onFileChangeWp(event,docType){
    let af = ['image/png', 'image/jpeg','application/pdf']
    if (event.target.files.length > 0) {
      const fileWp = event.target.files[0];
      if (!_.includes(af, fileWp.type)) {
        alert('Only PNG/JPEG/PDF formats Allowed!');
        this.imageError = 'Only Images are allowed ( JPG | PNG | PDF )';
        return false
      }
        //{"documentType":"1","documentNumber":"111111111111"}
        this.value = '{\"documentType\":\"'+docType+'\",\"documentNumber\":\"'+this.empWpd.workPermitNumber +'\"}';
        this.file = fileWp;
      }
    }
onFileChangePass(event,docType){
    let af = ['image/png', 'image/jpeg','application/pdf']
    if (event.target.files.length > 0) {
      const filePas = event.target.files[0];
      if (!_.includes(af, filePas.type)) {
        alert('Only PNG/JPEG/PDF formats Allowed!');
        this.imageError = 'Only Images are allowed ( JPG | PNG | PDF )';
        return false
      }
        //{"documentType":"1","documentNumber":"111111111111"}
        this.valuePass = '{\"documentType\":\"'+docType+'\",\"documentNumber\":\"'+this.empPass.passportNumber +'\"}';
        this.filePass = filePas;
      }
    }
callUpload(valuePS,filePS){
  //flag = false;
  this.ewebService.uploadFile(valuePS,filePS).then(
            (result) => {
                console.log(result);
    //            flag = true;
            },
        err => {
      //        flag = false;
              console.log(err);
          }
      );
  //  return flag;
  }

}
