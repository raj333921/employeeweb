import { Component, OnInit } from '@angular/core';
import { EwebcallService } from '../service/ewebcall.service';
import {CompanyDetails} from "./companyDetails";
import {Router} from "@angular/router";

@Component({
selector: 'app-signup',
templateUrl: './signup.component.html',
providers: [EwebcallService],
styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
company: CompanyDetails = new CompanyDetails();
submitted = false;
constructor(private ewebService: EwebcallService,private router: Router) { }
  ngOnInit() {
      //this.newCompany();
    }
  newCompany(): void {
    this.submitted = false;
    this.company = new CompanyDetails();
  }
 signUpCompany() {
       console.log(this.company);
    if(this.company.employeeDetails.lastName !=null && this.company.employeeDetails.firstName !=null && this.company.companyName !=null && this.company.emailId !=null && this.company.city !=null && this.company.country !=null && this.company.password !=null ) {
        this.company.active = 1;
        this.ewebService.createCompany(this.company).subscribe(data => console.log(data), error => console.log(error));
        this.company = new CompanyDetails();
        this.gotoList();
      }
      }

    gotoList() {
        this.router.navigate(['/logon']);
      }

onSubmit() {
    this.submitted = true;
    this.signUpCompany();
  }

  }

