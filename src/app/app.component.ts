import {Component, OnInit} from '@angular/core';
import {StudentsService} from "./services/students.service";
import {Student} from "./model/students.model";
import {KeycloakService,KeycloakEvent}  from "keycloak-angular";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  students! : Array<Student>;
  constructor(private  studentsService : StudentsService) {
  }

  ngOnInit() {
    /*this.studentsService.getStudents().subscribe({
      next : value => {
        this.students=value;

      },
      error : err => {
        console.log(err)
      }
    });*/
  }
}
