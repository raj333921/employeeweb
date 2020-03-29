import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class EwebcallService {

private actionUrl: string;
constructor(private http: HttpClient) {
    this.actionUrl = `http://localhost:8080/EProduct/success`;
  }

  loginUser(login: Object): Observable<Object>{
    return this.http.post('http://localhost:8080/EProduct/loginUser',login);
  }

  createCompany(company: Object): Observable<Object> {
    return this.http.post(`http://localhost:8080/EProduct/companysignup`, company);
  }

}
