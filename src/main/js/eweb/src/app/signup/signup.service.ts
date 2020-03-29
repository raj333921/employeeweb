import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
private actionUrl: string;
constructor(private http: HttpClient) {
    this.actionUrl = `http://localhost:8080/EProduct/success`;
  }
  /*initSources() : Promise <Employee> {
    return this.http.get(this.actionUrl).toPromise()
      .then(response => response as Employee);
  }*/


  companySignup(company: Object): Observable<Object> {
    return this.http.post(`http://localhost:8080/EProduct/companysignup`, company);
  }



}

