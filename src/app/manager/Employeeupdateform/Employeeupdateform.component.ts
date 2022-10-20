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
    var password = this.data.password;

    if (!password) {
      password = 'password';
    }
    if (id && name && dateofBirth && password) {
      console.log(id);
      const body = { id: id, username: name, dateOfBirth: dateofBirth };
      const headers = {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      };

      this.http
        .post('http://localhost:8080/updateEmployee', body, { headers })
        .subscribe((data) => {
          // this.postId = data.id;
          alert(JSON.stringify(data));
        });

      const body2 = {
        id: id,
        username: name,
        password: password,
        roles: ['user'],
      };
      this.http
        .post('http://localhost:8080/api/auth/updateUser', body2)
        .subscribe((data) => {
          // this.postId = data.id;
          alert(JSON.stringify(data));
        });
    }
    this.dialogRef.close();
  }
}
