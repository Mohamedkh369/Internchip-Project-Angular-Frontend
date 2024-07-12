import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../model/user";
import {Role} from "../model/Role";
import {AdminService} from "../services/admin.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrl: './add-role.component.css'
})
export class AddRoleComponent  implements  OnInit {

  addRoleFormGroup!: FormGroup;
  newRole!: Role;


  constructor(private fb: FormBuilder, private adminService: AdminService) {
  }

  ngOnInit() {
    this.initializeAddForm()

  }

  initializeAddForm(): void {
    this.addRoleFormGroup = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    });
  }


  addRole(): void {
      this.newRole = this.addRoleFormGroup.value;

      this.adminService.addRole(this.newRole).subscribe({
        next: value => {
          console.log('Role created successfully:', value);
        },
        error: err => {
          console.error('Error creating role:', err);
        }
      });
      this.initializeAddForm();
    }

}


