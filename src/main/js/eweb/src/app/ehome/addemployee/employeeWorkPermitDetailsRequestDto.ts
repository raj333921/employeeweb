export class EmployeeWorkPermitDetailsRequestDto{
endDate:string;
startDate:string;
validity:string;
workPermitNumber:string;

init(endDate:string,startDate:string,validity:string,workPermitNumber:string){
    this.endDate = endDate;
    this.startDate = startDate;
    this.validity = validity;
    this.workPermitNumber = workPermitNumber;
  }
}
