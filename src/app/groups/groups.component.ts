import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {User} from "../model/user";
import {AdminService} from "../services/admin.service";
import {Group} from "../model/Group";
import {Router} from "@angular/router";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css'
})
export class GroupsComponent  implements OnInit {
  groups!:Group[];
  groupsDataSource!:MatTableDataSource<any>;
  displayedColumns: string[] = ['Name','Actions'];

  constructor(private adminService : AdminService, private router : Router) {

  }

ngOnInit() {
    this.viewGroups()

}

viewGroups(){

  this.adminService.getGroups().subscribe({
    next : data => {
      this.groups=data;
      this.groupsDataSource= new MatTableDataSource(this.groups)
    },
    error : err =>{
      console.log("Couldnt get the data for the data source ",err)
    }
  })
}

goToAddGroup(){
    this.router.navigate(['/admin','addGroup']);
}

goToAssignUserToGroup(groupeName: string){
    this.router.navigate(['/admin','AssignUserToGroup',`${groupeName}`]);
}


}
