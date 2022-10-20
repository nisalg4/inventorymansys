import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeveragesComponent } from './beverages/beverages.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { EmployeeupdateformComponent } from './manager/Employeeupdateform/Employeeupdateform.component';
import { ManagerComponent } from './manager/manager.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: 'departments', component: DepartmentListComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'beverages', component: BeveragesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'employee', component: EmployeeComponent },
  {
    path: 'manager/Employeeupdateform',
    component: EmployeeupdateformComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  DepartmentListComponent,
  EmployeeListComponent,
  BeveragesComponent,
  LoginComponent,
  SignUpComponent,
  ManagerComponent,
  EmployeeComponent,
  EmployeeupdateformComponent,
];
