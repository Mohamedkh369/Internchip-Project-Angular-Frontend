import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Group} from "../model/Group";
import {AdminService} from "../services/admin.service";
import {UserToGroup} from "../model/userToGroup";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-assign-user-to-group',
  templateUrl: './assign-user-to-group.component.html',
  styleUrl: './assign-user-to-group.component.css'
})
export class AssignUserToGroupComponent {



  AssignUserFormGroup!: FormGroup;
  userToGroup=new UserToGroup('',this.route.snapshot.params['groupName']);


  constructor(private fb: FormBuilder, private adminService: AdminService, private route: ActivatedRoute) {
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
  this.userToGroup.username=this.AssignUserFormGroup.value.username;
    this.adminService.addUserToGroup(this.userToGroup).subscribe({
      next: value => {
        console.log(this.userToGroup);
      },
      error: error => {
        console.log(error);
      }
    })

  }

}
