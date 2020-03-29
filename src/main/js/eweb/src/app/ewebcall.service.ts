import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})
export class EwebcallService {

constructor(private http:HttpClient) { }
  createCompany(formData) {
      let data = JSON.stringify(formData);
      let url = 'http://localhost:8080/EProduct/companysignup';
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      return this.http.post(url, data, httpOptions)
        .pipe(map((resp: any) => {
          return resp;
        }));
    }
}
