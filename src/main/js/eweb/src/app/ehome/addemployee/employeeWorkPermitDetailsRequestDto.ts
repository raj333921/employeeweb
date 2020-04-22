export class EmployeeWorkPermitDetailsRequestDto{
  documentData:string;
documentName:string;
endDate:string;
startDate:string;
validity:string;
workPermitNumber:string;

init(documentData:string,documentName:string,endDate:string,startDate:string,validity:string,workPermitNumber:string){
    this.documentData = documentData;
    this.documentName = documentName;
    this.endDate = endDate;
    this.startDate = startDate;
    this.validity = validity;
    this.workPermitNumber = workPermitNumber;
  }
}
