import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import { EhomeDetails } from './ehomeDetails';
import {Observable, Subscription} from 'rxjs';
import {StorageService} from '../service/storage.service';


@Component({
selector: 'app-ehome',
templateUrl: './ehome.component.html',
styleUrls: ['./ehome.component.css']
})
export class EhomeComponent implements OnInit {
private ehomeDetails: EhomeDetails = new EhomeDetails();
private subscription: Subscription;
constructor(private router: Router,private storageService: StorageService) { }

  ngOnInit() {
  this.ehomeDetails = this.storageService.getEhomDetails();
  console.log(this.ehomeDetails);
       // this.reloadData(this.ehomeDetails);
  }



}
