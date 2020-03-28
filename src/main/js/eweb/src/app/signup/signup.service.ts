import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http:HttpClient) { }
  createCompany(formData:string):void {
      let data = JSON.stringify(formData);
      let url = 'http://localhost:8080/EProduct/companysignup';
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      return this.http.post(url, data, httpOptions)
        .pipe(map((resp: any) => {return resp;}))
        };
    }





