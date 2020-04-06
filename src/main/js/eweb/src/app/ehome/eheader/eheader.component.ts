import { Component, OnInit } from '@angular/core';
import { EhomeDetails } from '../ehomeDetails';
import {StorageService} from '../../service/storage.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-eheader',
  templateUrl: './eheader.component.html',
  styleUrls: ['./eheader.component.css']
})
export class EheaderComponent implements OnInit {
ehomeDetails: EhomeDetails = new EhomeDetails();

  constructor(private router: Router,private storageService: StorageService) { }

  ngOnInit() {
 this.ehomeDetails = this.storageService.getEhomDetails();
  //console.log(this.ehomeDetails);
  }

}
