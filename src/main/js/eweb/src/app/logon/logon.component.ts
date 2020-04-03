import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {LogonDetails} from "./logonDetails";
import { EwebcallService } from '../service/ewebcall.service';
import { EhomeDetails } from '../ehome/ehomeDetails';
import {Router} from "@angular/router";
import {StorageService} from '../service/storage.service';

@Component({
selector: 'app-logon',
templateUrl: './logon.component.html',
styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {
logon: LogonDetails = new LogonDetails();
eHomeDetails: EhomeDetails = new EhomeDetails();
submitted = false;
constructor(private ewebService: EwebcallService,private router: Router,private storageService: StorageService) { }
  ngOnInit() { }
    logOnMe() {
       console.log(this.logon);
       if(this.logon.userName !=null && this.logon.password !=null) {
        this.ewebService.loginUser(this.logon).subscribe((data) => {
         this.eHomeDetails = data;
         console.log(this.eHomeDetails);
         this.gotoList(this.eHomeDetails);
        },err => {
              console.log(err);
          }
      );}

    }

    gotoList(eHomeDetails : EhomeDetails) {
      console.log(JSON.stringify(eHomeDetails));
        this.storageService.setEhomDetails(eHomeDetails);
        this.router.navigate(['/ehome']);
      }

    onSubmit() {
      this.submitted = true;
      this.logOnMe();
    }

}
