import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cpd',
  templateUrl: './cpd.component.html',
  styleUrls: ['./cpd.component.css']
})
export class CpdComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
