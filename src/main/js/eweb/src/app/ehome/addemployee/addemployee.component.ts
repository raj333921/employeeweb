import { Component, OnInit } from '@angular/core';
import {AddEmpDet} from './addEmpDet';
import {EmpPass} from './empPass';
import {EmployeePassportDetailRequestDto} from './employeePassportDetailRequestDto';
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
empPass : EmpPass = new EmpPass();
emp: EmployeePassportDetailRequestDto = new EmployeePassportDetailRequestDto();
submitted = false;
error = false;
success = false;
  constructor(private ewebService: EwebcallService,private router: Router,private storageService: StorageService) { }

  ngOnInit() {
    this.ehomeDetails = this.storageService.getEhomDetails();
  }


 saveMe() {
       console.log(this.empDet);
this.empDet.adminuserName = this.ehomeDetails.userName;
this.empDet.companyId = this.ehomeDetails.companyId;

//this.empDet.employeeDetailsRequestDto.employeePassportDetailRequestDto = this.empPass;
 this.ewebService.addModifyEmp(this.empDet).subscribe((data) => {
         //console.log(data);
          this.success = true;
          this.gotoList(data);
        },err => {
              this.error = true;
              console.log(err);
          }
      );
}

    gotoList(data : Object) {
      console.log(JSON.stringify(data));

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
