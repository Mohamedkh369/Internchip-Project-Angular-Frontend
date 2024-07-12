import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../services/admin.service";
import {Group} from "../model/Group";

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrl: './add-group.component.css'
})
export class AddGroupComponent  implements  OnInit{


  addGroupFormGroup!: FormGroup;
  newGroup!: Group;
  groupName!:string;

  constructor(private fb: FormBuilder, private adminService: AdminService) {
  }

  ngOnInit() {
    this.initializeAddForm();

  }

  initializeAddForm(): void {
    this.addGroupFormGroup = this.fb.group({
      name: ['', Validators.required],
    });
  }


  addGroup(): void {
    this.newGroup = this.addGroupFormGroup.value
    this.groupName=this.newGroup.name;
    console.log("this is the string ",this.newGroup.name);

    this.adminService.addGroup(this.groupName).subscribe()
    this.initializeAddForm();

  }


}
