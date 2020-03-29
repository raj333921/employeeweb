import { Component, OnInit } from '@angular/core';
import { SignUpService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  providers: [SignUpService],
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private signService: SignUpService) { }
  ngOnInit() {
      this.signUpCompany();
    }
     signUpCompany(): void {
      var formData ={};
        this.signService.createCompany(formData).subscribe(signup => (this.signup = signup));
      }
  }

