import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../services/admin.service";
import {User} from "../model/user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent  implements OnInit {

  addUserFormGroup!: FormGroup;
  newUser!:User;

  ngOnInit() {
    this.initializeAddForm();
  }

  constructor(private fb: FormBuilder ,private adminService : AdminService) {

  }

  initializeAddForm(): void {
    this.addUserFormGroup = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password : ['',Validators.required],
    });
  }

  addUser(): void {
    this.newUser = this.addUserFormGroup.value;
    console.log("The user we're going to add is:", JSON.stringify(this.newUser));
     this.adminService.createUser(this.newUser).subscribe({
       next: (data) => {
         console.log(data);
       },
       error: error => {
         return console.log(error)
       }
     })
    this.initializeAddForm();

  }


}
