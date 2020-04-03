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
private ehomeDetails: EhomeDetails = new EhomeDetails();

constructor(private router: Router,private storageService: StorageService) { }

  ngOnInit() {
  }



}
