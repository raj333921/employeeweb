import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import { EhomeDetails } from './ehomeDetails';
import {StorageService} from '../service/storage.service';


@Component({
selector: 'app-ehome',
templateUrl: './ehome.component.html',
styleUrls: ['./ehome.component.css']
})
export class EhomeComponent implements OnInit {
private eHomeDetails: EhomeDetails = new EhomeDetails();

constructor(private router: Router,private storageService: StorageService) { }
showEPanel = false;
showAdminPanel = false;
  ngOnInit() {
    this.eHomeDetails = this.storageService.getEhomDetails();

  }

  get isValid(){
    if(this.eHomeDetails.role == 'Admin'){
        this.showAdminPanel = true;
    }
    return this.showAdminPanel;
  }

  get isValidE(){
if(this.eHomeDetails.role == 'Employee'){
        this.showEPanel = true;
    }
    return this.showEPanel;
}




}
