import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EhomeDetails } from '../ehome/ehomeDetails';

@Injectable({
providedIn: 'root'
})
export class EwebcallService {

private actionUrl: string;
constructor(private http: HttpClient) {
    this.actionUrl = `http://localhost:8080/EProduct/success`;
  }

  loginUser(login: Object): Observable<EhomeDetails>{
    return this.http.post('http://localhost:8080/EProduct/loginUser',login).pipe(map((resp: EhomeDetails) => {
        return resp;
      }));;
  }

  createCompany(company: Object): Observable<Object> {
    return this.http.post(`http://localhost:8080/EProduct/companysignup`, company);
  }


}
