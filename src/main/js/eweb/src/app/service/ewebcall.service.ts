import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
import {Http, ResponseContentType} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EhomeDetails } from '../ehome/ehomeDetails';
import { EmpRes } from '../ehome/employee/empRes';
import { EmployeeDetailsRequestDto } from '../ehome/addemployee/employeeDetailsRequestDto';
import { EmpDetails } from '../ehome/employee/empDetails';

@Injectable({
providedIn: 'root'
})
export class EwebcallService {

private actionUrl: string;
constructor(private http: HttpClient,private httpT:Http) {
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

 employeeList(empDetails : EmpDetails): Promise<EmpRes>{
      return this.http.post(`http://localhost:8080/EProduct/retrieveEmployeeList`, empDetails).toPromise()
          .then(response => response as EmpRes);
    }

 downloadFile(val): Observable<any>{
		return this.httpT.get('http://localhost:8080/EProduct/pdfreport/'+val, { responseType: ResponseContentType.Blob });
   }

 uploadFile(value: any,file: any): Promise<String>{
        let url = 'http://localhost:8080/EProduct/uploadDocument';
        let input = new FormData();
        input.append('file', file);
        input.append('value',value);
	return this.http.post(`http://localhost:8080/EProduct/uploadDocument`,input).toPromise()
          .then(response => response as String);
 }

addModifyEmp(company: Object): Promise<EmployeeDetailsRequestDto> {
    return this.http.post(`http://localhost:8080/EProduct/addModifyEmployee`, company).toPromise()
          .then(response => response as EmployeeDetailsRequestDto);
  }

}
