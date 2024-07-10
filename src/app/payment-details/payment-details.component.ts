import {Component, OnInit} from '@angular/core';
import {StudentsService} from "../services/students.service";
import {ActivatedRoute} from "@angular/router";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css'
})
export class PaymentDetailsComponent implements OnInit{
  paymentId! :  number;
  pdfUrl! : SafeResourceUrl;
  constructor(private studentsService : StudentsService , private route : ActivatedRoute,  private sanitizer: DomSanitizer
  )  {
  }


  ngOnInit() {
    this.paymentId=this.route.snapshot.params['id'];
    this.studentsService.getPaymentDetails(this.paymentId).subscribe({
      next: data => {
        let blob : Blob= new Blob([data], {type:"application/pdf"});
        this.pdfUrl=this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(blob));
      },
      error : err => {
        console.log(err);
      }
    })

  }



}
