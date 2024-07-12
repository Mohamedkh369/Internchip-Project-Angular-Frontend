import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {AdminService} from "../services/admin.service";
import {Role} from "../model/Role";
import {Router} from "@angular/router";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{
  roles!:Role[];
  rolesDataSource!:MatTableDataSource<any>;
  displayedColumns: string[] = ['Name','Description','Composite','Actions'];

  constructor(private adminService : AdminService, private router : Router) {
  }

  ngOnInit() {

  this.getRoles()

  }

  getRoles():void {

    this.adminService.getRoles().subscribe({
      next : data =>{
        this.roles=data;
        this.rolesDataSource=new MatTableDataSource<any>(this.roles)
      }
    })

  }

  goToAddRole():void{
    this.router.navigate(['/admin','addRole']);
  }



}
