import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeveragesComponent } from './beverages/beverages.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [{path: 'departments',component:DepartmentListComponent
},{path: 'employees',component:EmployeeListComponent},{path: 'beverages',component:BeveragesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DepartmentListComponent,EmployeeListComponent,BeveragesComponent]
