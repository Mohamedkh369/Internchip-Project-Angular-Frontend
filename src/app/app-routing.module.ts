import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {LoadStudentsComponent} from "./load-students/load-students.component";
import {LoadPaymentsComponent} from "./load-payments/load-payments.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {StudentsComponent} from "./students/students.component";
import {PaymentsComponent} from "./payments/payments.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthGuard} from "./guards/auth.guard";
import {StudentDetailsComponent} from "./student-details/student-details.component";
import {NewPaymentComponent} from "./new-payment/new-payment.component";
import {PaymentDetailsComponent} from "./payment-details/payment-details.component";
import {AlreadyloggedInGuard} from "./guards/alreadylogged-in.guard";
import {UsersComponent} from "./users/users.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {RolesComponent} from "./roles/roles.component";
import {GroupsComponent} from "./groups/groups.component";
import {AddRoleComponent} from "./add-role/add-role.component";
import {AddGroupComponent} from "./add-group/add-group.component";
import {AssignUserToGroupComponent} from "./assign-user-to-group/assign-user-to-group.component";


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent , canActivate:[AuthGuard]},
  {path: 'admin', component: AdminTemplateComponent ,canActivate:[AlreadyloggedInGuard],

    children : [
      {path: 'home', component: HomeComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'loadPayments', component: LoadPaymentsComponent},
      {path : 'student-details/:code' , component: StudentDetailsComponent },
      {path: 'new-payment/:code' , component: NewPaymentComponent},
      {path:  'payment-details/:id', component : PaymentDetailsComponent},
      {path: 'loadStudents', component: LoadStudentsComponent},
      {path: 'dashboard' , component: DashboardComponent},
      {path: 'students', component: StudentsComponent},
      {path: 'payments' , component: PaymentsComponent},
      {path: 'users', component: UsersComponent},
      {path: 'editUser/:id', component: EditUserComponent},
      {path: 'addUser', component: AddUserComponent},
      {path: 'roles', component : RolesComponent},
      {path: 'groups', component: GroupsComponent},
      {path: 'addRole', component: AddRoleComponent},
      {path: 'addGroup',component: AddGroupComponent},
      {path: 'AssignUserToGroup/:groupName', component: AssignUserToGroupComponent},

    ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),],

  exports: [RouterModule]
})
export class AppRoutingModule { }
