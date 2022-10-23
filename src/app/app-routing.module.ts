import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { EmployeeupdateformComponent } from './manager/Employeeupdateform/Employeeupdateform.component';
import { ManagerComponent } from './manager/manager.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
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
  LoginComponent,
  SignUpComponent,
  ManagerComponent,
  EmployeeComponent,
  EmployeeupdateformComponent,
];
