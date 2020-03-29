import { Component, OnInit } from '@angular/core';
import {LogonDetails} from "./logonDetails";
import { EwebcallService } from '../service/ewebcall.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {
logon: LogonDetails = new LogonDetails();
submitted = false;
constructor(private ewebService: EwebcallService,private router: Router) { }
  ngOnInit() { }
    logOnMe() {
       console.log(this.logon);
       if(this.logon.userName !=null && this.logon.password !=null) {
        this.ewebService.loginUser(this.logon).subscribe(data => console.log(data), error => console.log(error));
        this.logon = new LogonDetails();
        this.gotoList();
      }
    }
    gotoList() {
        this.router.navigate(['/ehome']);
      }
    onSubmit() {
     // this.submitted = true;
      this.logOnMe();
    }
}
