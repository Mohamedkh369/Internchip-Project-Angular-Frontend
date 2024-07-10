import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Payment, Student} from "../model/students.model";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) {  }

  public getAllPayments() : Observable<Array<Payment>> {
    return this.http.get<Array<Payment>>(`${environment.backEndHost}/Payments`);

  }
  public getStudents() : Observable<Array<Student>> {
    return this.http.get<Array<Student>>(`${environment.backEndHost}/Students`)

  }

  public getStudentPayments(code : string) : Observable<Array<Payment>> {
    return this.http.get<Array<Payment>>(`${environment.backEndHost}/Students/${code}/Payments`)

  }

  public savePayment(formData: FormData): Observable<Payment> {
    return this.http.post<Payment>(`${environment.backEndHost}/NewPayments`, formData);
  }


  public getPaymentDetails(paymentId: number) {
    return this.http.get(`${environment.backEndHost}/PaymentFile/${paymentId}`, {responseType: 'blob'} ) ;
  }
}
