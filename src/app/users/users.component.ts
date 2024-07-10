import {Component, OnInit} from '@angular/core';
import {User} from "../model/user";
import {MatTableDataSource} from "@angular/material/table";
import {AdminService} from "../services/admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{

  users: User[] = [];
  displayedColumns: string[] = ['id', 'username', 'firstName', 'lastName', 'email', 'Actions'];
  usersDataSource = new MatTableDataSource<User>();

  constructor(private adminService : AdminService , private router : Router) {
  }

  ngOnInit(){
    this.adminService.getUsers().subscribe(users => {
      this.usersDataSource.data = users;
    });
  }


  deleteUser(id:string){
    this.adminService.deleteUser(id).subscribe(() => {
      this.users=this.usersDataSource.data;
      this.users = this.users.filter(user => user.id !== id);
      this.usersDataSource.data = this.users;
    });
  }


  editUser(id: string){
    this.router.navigate(['/admin','editUser',id]);

  }
  goToAddUser() : void{
    this.router.navigate(['/admin','addUser']);
  }





}
