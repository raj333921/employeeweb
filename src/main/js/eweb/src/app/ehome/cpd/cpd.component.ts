import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Cpd} from "./cpd";
import { EwebcallService } from '../../service/ewebcall.service';
import { EhomeDetails } from '../ehomeDetails';
import {StorageService} from '../../service/storage.service';

@Component({
  selector: 'app-cpd',
  templateUrl: './cpd.component.html',
  styleUrls: ['./cpd.component.css']
})
export class CpdComponent implements OnInit {
ehomeDetails: EhomeDetails = new EhomeDetails();
cpd:Cpd = new Cpd();
submitted = false;
  constructor(private ewebService: EwebcallService,private router: Router,private storageService: StorageService,) { }

  ngOnInit() {
      this.ehomeDetails = this.storageService.getEhomDetails();
  }

saveMe() {
this.cpd.userName = this.ehomeDetails.userName;
this.cpd.reset = 1;
if(this.cpd.password != this.cpd.newPassword && this.cpd.password != this.cpd.newPassword1 && this.cpd.newPassword1 == this.cpd.newPassword ){
      this.ewebService.loginUser(this.cpd).subscribe((data) => {
         this.gotoList(data);
        },err => {
              console.log(err);
              alert(err.error.message);
          }
      );
      }else if(this.validationString(this.cpd.password) || this.validationString(this.cpd.newPassword) || this.validationString(this.cpd.newPassword1)){
          alert("Please enter all Mandatory fields");
      }else if(this.cpd.newPassword != this.cpd.newPassword1){
          alert("Please enter NewPassword and Confirm Password correctly");
      }else if(!this.validationString(this.cpd.newPassword) && this.cpd.newPassword.length < 8){

      }
    }
    validationString(str){
      var flag = false;
      if(str == "" || str == null || str == undefined){
          flag = true;
      }
      return flag;
    }
    gotoList(eHomeDetails : EhomeDetails) {
      alert("Hi5: You have succesfully changed your password !!");
      }

    onSubmit() {
      this.submitted = true;
      this.saveMe();
    }
}
