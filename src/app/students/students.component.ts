import {Component, OnInit} from '@angular/core';
import {Student} from "../model/students.model";
import {StudentsService} from "../services/students.service";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit{
students! : Array<Student>;
studentsDataSource! : MatTableDataSource<Student>;
displayedColumns : string[]=['id','firstName','lastName','code','programId' , 'payments' ];

constructor(private studentService : StudentsService , private router : Router) {

}

  ngOnInit() {
    this.studentService.getStudents().subscribe({
      next : value => {
        this.students = value;
        this.studentsDataSource = new MatTableDataSource<Student>(this.students);
      },
      error : err =>{
        console.log(err)
    }
    })

  }
  studentPayments(student : Student){
  this.router.navigateByUrl("/admin/student-details/"+student.code)
  }

}
