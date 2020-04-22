export class EmployeeFamilyDetailsRequestDto{
  contactNumber:string;
firstName:string;
id:string;
lastName:string;
relation:string;
init(contactNumber:string,firstName:string,id:string,lastName:string,relation:string){
    this.contactNumber = contactNumber;
    this.firstName = firstName;
    this.id = id;
    this.lastName = lastName;
    this.relation = relation;
  }
}
