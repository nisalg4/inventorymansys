import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './firstgen/firstcomponent/firstcomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { BeveragesComponent } from './beverages/beverages.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { EmployeeComponent } from './employee/employee.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeupdateformComponent } from './manager/Employeeupdateform/Employeeupdateform.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { AssetupdateformComponent } from './manager/assetupdateform/assetupdateform.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstcomponentComponent,
    routingComponents,
    EmployeeListComponent,
    LoginComponent,
    ManagerComponent,
    EmployeeComponent,
    SignUpComponent,
    EmployeeupdateformComponent,
    AssetupdateformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
