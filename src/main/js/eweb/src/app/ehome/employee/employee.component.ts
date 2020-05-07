import { Component, OnInit } from '@angular/core';
import { EhomeDetails } from '../ehomeDetails';
import { EmpDetails } from './empDetails';
import { EmpResDet } from './empResDet';
import { DeleteEmp } from './deleteEmp';
import { RetrieveEmp } from './retrieveEmp';
import {StorageService} from '../../service/storage.service';
import { EwebcallService } from '../../service/ewebcall.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
empDetails: EmpDetails = new EmpDetails();
eHomeDetails: EhomeDetails = new EhomeDetails();
delEmp: DeleteEmp = new DeleteEmp();
employees: EmpResDet[];
showAdminPanel = false;
retEmp: RetrieveEmp = new RetrieveEmp();
constructor(private ewebService: EwebcallService,private router: Router,private storageService: StorageService) { }

 ngOnInit(){
        this.eHomeDetails = this.storageService.getEhomDetails();
        console.log("eeee--->"+this.eHomeDetails.userName);
        this.reloadData(this.eHomeDetails);
    }

    reloadData(eHomeDetails: EhomeDetails) {
        this.empDetails.userName = this.eHomeDetails.userName;
        this.empDetails.companyId = this.eHomeDetails.companyId;
        this.empDetails.password = 'sai';
        this.ewebService.employeeList(this.empDetails).then(
            (result) => {this.employees = result.employeeDetailsList},
           err => {
               console.log(err);
           }
       );
    }

    download() {
        this.empDetails.userName = this.eHomeDetails.userName;
        this.empDetails.companyId = this.eHomeDetails.companyId;
        this.empDetails.password = 'sai';
    this.ewebService.downloadFile(this.empDetails).then(response => {
      window.open(window.URL.createObjectURL(response));
		}), error => console.log('Error downloading the file'),
                 () => console.info('File downloaded successfully');
  }

  navigato(){
       // alert("I am in");
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate(['employee']);
});
}



  delete(userName){
      var answer = window.confirm("Are you sure to delete employee");
      if(answer){
     this.delEmp.adminPassword = 'sai';
     this.delEmp.adminUserName = this.eHomeDetails.userName;
     this.delEmp.userName = userName;
    this.ewebService.deleteEmp(this.delEmp).then(
            (result) => {
                alert(result.message);
                this.navigato();
            },
           err => {
               alert(err);
                this.navigato();
           }
       );
    }
  }


  retrieve(employeeId){
     this.retEmp.password = 'sai';
     this.retEmp.userName = this.eHomeDetails.userName;
     this.retEmp.employeeId = employeeId;
      this.ewebService.retrieveEmployeeData(this.retEmp).then(
            (result) => {
                alert(result);
                this.navigatoAddEmp(result);
            },
           err => {
               alert(err);
               // this.navigato();
           }
       );
  }
navigatoAddEmp(result){
this.router.navigateByUrl('/addemp',result);
}
//routerLink = "/addemp" routerLinkActive="active"
}
