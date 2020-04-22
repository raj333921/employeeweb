export class EmployeePassportDetailRequestDto{
endDate: string;
issuePlace: string;
passportNumber: string;
startDate: string;
validity: string;
  init(endDate: string,issuePlace: string,passportNumber: string,startDate: string,validity: string){
    this.endDate = endDate;
    this.issuePlace = issuePlace;
    this.passportNumber = passportNumber;
    this.startDate = startDate;
    this.validity = validity;
  }
}
