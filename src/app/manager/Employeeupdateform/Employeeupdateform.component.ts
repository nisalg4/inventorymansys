import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { employeeupdate } from '../manager.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Employeeupdateform',
  templateUrl: './Employeeupdateform.component.html',
  styleUrls: ['./Employeeupdateform.component.css'],
})
export class EmployeeupdateformComponent {
  public constructor(
    public dialogRef: MatDialogRef<EmployeeupdateformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: employeeupdate,
    private http: HttpClient
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  updateemployee() {
    var id = this.data.id;
    var name = this.data.username;
    var dateofBirth = this.data.dateOfBirth;

    if (id && name && dateofBirth) {
      console.log(id);
      const body = { id: id, username: name, dateOfBirth: dateofBirth };
      const headers = {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      };

      this.http
        .post(environment.URL + '/updateEmployee', body, { headers })
        .subscribe((data) => {});
    }
    this.dialogRef.close();
  }
}
