import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Group} from "../model/Group";
import {AdminService} from "../services/admin.service";

@Component({
  selector: 'app-assign-user-to-group',
  templateUrl: './assign-user-to-group.component.html',
  styleUrl: './assign-user-to-group.component.css'
})
export class AssignUserToGroupComponent {



  AssignUserFormGroup!: FormGroup;
  userToAssign!: string;
  groupName!:string;

  constructor(private fb: FormBuilder, private adminService: AdminService) {
  }

  ngOnInit() {
    this.initializeAddForm();

  }

  initializeAddForm(): void {
    this.AssignUserFormGroup = this.fb.group({
      username: ['', Validators.required],
    });
  }



  assignUser(){

  }

}
