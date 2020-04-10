import { Component, OnInit } from '@angular/core';
import { EhomeDetails } from '../ehomeDetails';
import { EmpDetails } from './empDetails';
import { EmpResDet } from './empResDet';
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
employees: EmpResDet[];
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
            (result) => {this.employees = result.employeeDetailsResponseDto},
           err => {
               console.log(err);
           }
       );
    }

    download() {
    this.ewebService.downloadFile(this.eHomeDetails.companyId).subscribe(response => {
			//let blob:any = new Blob([response.blob()], { type: 'text/json; charset=utf-8' });
			//const url= window.URL.createObjectURL(blob);
			//window.open(url);
			//window.location.href = response.url;
			fileSaver.saveAs(response.blob(), 'employees.pdf');
		}), error => console.log('Error downloading the file'),
                 () => console.info('File downloaded successfully');
  }

}
