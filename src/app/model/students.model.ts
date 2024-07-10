export interface Student{
  id: string;
  firstName: string;
  lastName: string;
  code : string;
  programId: string;
  photo: string;
}
export interface Payment{
  id: number ;
  date : string;
  amount : number;
  type: string;
  status : string;
  file : string;
  student : Student;
}
export enum PaymentType{
  Cash , CHECK, TRANSFER , DEPOSIT
}

export enum PaymentStatus {
  CREATED , REJECTED , VALIDATED
}
