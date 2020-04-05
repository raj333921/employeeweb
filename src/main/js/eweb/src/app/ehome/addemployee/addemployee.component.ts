import { Component, OnInit } from '@angular/core';
import {AddEmpDet} from './addEmpDet'
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
submitted = false;
  constructor(private ewebService: EwebcallService,private router: Router,private storageService: StorageService) { }

  ngOnInit() {
    this.ehomeDetails = this.storageService.getEhomDetails();
  }


 saveMe() {
       console.log(this.empDet);
this.empDet.adminuserName = this.ehomeDetails.userName;
this.empDet.companyId = this.ehomeDetails.companyId;
 this.ewebService.addModifyEmp(this.empDet).subscribe((data) => {
         console.log(data);
        },err => {
              console.log(err);
          }
      );

          }

    gotoList(eHomeDetails : EhomeDetails) {
      console.log(JSON.stringify(eHomeDetails));
        this.storageService.setEhomDetails(eHomeDetails);
        this.router.navigate(['/ehome']);
      }

    onSubmit() {
      this.submitted = true;
      this.saveMe();
    }


}
