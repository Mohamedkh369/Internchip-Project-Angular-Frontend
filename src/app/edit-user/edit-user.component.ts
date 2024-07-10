import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminService} from "../services/admin.service";
import {User} from "../model/user";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit{
    editUserFormGroup!: FormGroup;
    currentUser = new User();
    isFormGroupInitialized : boolean = false;


  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private adminService : AdminService) {



   }

  async ngOnInit(): Promise<void> {
    await this.loadUserInfo();
    this.initializeEditForm();
    console.log(this.editUserFormGroup);


  }


  async loadUserInfo(): Promise<void> {
    try {
      const userId = this.activatedRoute.snapshot.params['id'];
      this.currentUser = await this.adminService.getUserById(userId);
      console.log("the data is ", this.currentUser);
    } catch (error) {
      console.error('Failed to load user information:', error);
    }
  }

  initializeEditForm(): void {
    this.editUserFormGroup = this.fb.group({
      id: [this.activatedRoute.snapshot.params['id'],[Validators.required]],
      username: [this.currentUser.username, [Validators.required]],
      firstName: [this.currentUser.firstName, Validators.required],
      lastName: [this.currentUser.lastName,[Validators.required]],
      email: [this.currentUser.email,[Validators.required, Validators.email]],

    })

    this.isFormGroupInitialized  = true;
    console.log("aho l user ",this.currentUser);
  }

  saveChanges(){
    this.currentUser=this.editUserFormGroup.value;
    this.adminService.updateUser(this.activatedRoute.snapshot.params['id'], this.currentUser).subscribe({
      next: result => {
        console.log("jaaawna bhii",result)
      },error: err => {
        console.log("t3adit ll erreur ",err);
      }
    })


  }



}
