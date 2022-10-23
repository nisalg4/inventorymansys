import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { assets } from '../employee/employee.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { EmployeeupdateformComponent } from './Employeeupdateform/Employeeupdateform.component';
import { AssetupdateformComponent } from './assetupdateform/assetupdateform.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})
export class ManagerComponent implements OnInit {
  name = localStorage.getItem('name');
  public constructor(
    private changeDetector: ChangeDetectorRef,
    private http: HttpClient,
    public dialog: MatDialog,
    private router: Router
  ) {}

  //data1 = [JSON.parse(this.data) as IAccountBalance];
  tableData: IDynamicTable | undefined;
  tableDataAssets: IDynamicTable | undefined;
  tableDataAssignments: IDynamicTable | undefined;
  allHeaders: ITableHeader[] | undefined;
  dragTrace: { src: number; dest: number } | undefined;

  updateemployeepopup(employee: employeeupdate) {
    const dialogRef = this.dialog.open(EmployeeupdateformComponent, {
      data: {
        id: employee.id,
        username: employee.username,
        dateOfBirth: employee.dateOfBirth,
        password: employee.password,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  updateassetpopup(asset: asset) {
    const dialogRef = this.dialog.open(AssetupdateformComponent, {
      data: {
        assetId: asset.assetId,
        name: asset.name,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  getEmployees() {
    //alert(localStorage.getItem('token'));
    //alert(localStorage.getItem('username'));

    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    const datafromapi = this.http
      .get('http://localhost:8080/Employee/getAll', { headers })
      .subscribe((data) => {
        // this.postId = data.id;
        //alert(data);
        const headersfortable = ['username', 'dateOfBirth'].map(
          (x, i) => ({ key: x, index: i, isSelected: true } as ITableHeader)
        );

        this.render(headersfortable, data);
      });

    //alert(this.data1);
  }

  getAssets() {
    //alert(localStorage.getItem('token'));
    //alert(localStorage.getItem('username'));

    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    const datafromapi = this.http
      .get('http://localhost:8080/Asset/getAll', { headers })
      .subscribe((data) => {
        // this.postId = data.id;
        //alert(data);
        const headersfortable = ['name'].map(
          (x, i) => ({ key: x, index: i, isSelected: true } as ITableHeader)
        );

        this.renderAssets(headersfortable, data);
      });

    //alert(this.data1);
  }

  getAssetAssignments() {
    //alert(localStorage.getItem('token'));
    //alert(localStorage.getItem('username'));

    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    const datafromapi = this.http
      .get('http://localhost:8080/AssetAssignment/getAll', { headers })
      .subscribe((data) => {
        // this.postId = data.id;
        console.log(data);

        //  let myData = JSON.parse(data); // response is the JSON that you provided

        //let designNames = myData['Test Data'].map(data => data['"First Test"']['Design Name']);

        const headersfortable = ['employee', 'asset'].map(
          (x, i) => ({ key: x, index: i, isSelected: true } as ITableHeader)
        );

        this.renderAssetAssignments(headersfortable, data);
      });

    //alert(this.data1);
  }

  addemployee() {
    var name = (<HTMLInputElement>document.getElementById('employeename'))
      .value;
    var dateofBirth = (<HTMLInputElement>(
      document.getElementById('employeedateofbirth')
    )).value;
    var password = (<HTMLInputElement>(
      document.getElementById('employeepassword')
    )).value;

    if (name && dateofBirth && password) {
      const body = { username: name, dateOfBirth: dateofBirth };
      const headers = {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      };

      this.http
        .post('http://localhost:8080/addEmployee', body, { headers })
        .subscribe((data) => {
          // this.postId = data.id;
          alert('Employee Added');
          location.reload();
        });

      const body2 = {
        username: name,
        password: password,
        roles: ['user'],
      };
      this.http
        .post('http://localhost:8080/api/auth/signup', body2)
        .subscribe((data) => {
          // this.postId = data.id;
          //alert(JSON.stringify(data));
        });
    }
  }

  addAsset() {
    var assetName = (<HTMLInputElement>document.getElementById('assetName'))
      .value;

    if (assetName) {
      //console.log(id);
      const body = { name: assetName };
      const headers = {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      };

      this.http
        .post('http://localhost:8080/addAsset', body, { headers })
        .subscribe((data) => {
          // this.postId = data.id;
          alert('Asset Added');
          location.reload();
        });
    }
  }

  addAssetAssignment() {
    var employeeName = (<HTMLInputElement>(
      document.getElementById('EmployeeNameAssignmentId')
    )).value;
    var assetName = (<HTMLInputElement>(
      document.getElementById('assetNameAssignmentId')
    )).value;

    if (employeeName && assetName) {
      //console.log(id);
      const body = { employee: employeeName, asset: assetName };
      const headers = {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      };

      this.http
        .post('http://localhost:8080/addAssetAssignmentforemployee', body, {
          headers,
        })
        .subscribe((data) => {
          // this.postId = data.id;
          alert('Asset Assigned');
          location.reload();
        });
    }
  }

  deleteEmployee(employee: employee) {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    const datafromapi = this.http
      .get('http://localhost:8080/Employee/delete/' + employee.id, { headers })
      .subscribe((data) => {
        // this.postId = data.id;
        alert('Employee deleted');
        location.reload();
      });
  }

  deleteAsset(asset: asset) {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    const datafromapi = this.http
      .get('http://localhost:8080/Asset/delete/' + asset.assetId, {
        headers,
      })
      .subscribe((data) => {
        // this.postId = data.id;
        console.log(data);
      });
  }

  deleteAssetAssignment(AssetAssignmentdelete: AssetAssignmentdelete) {
    if (AssetAssignmentdelete.asset && AssetAssignmentdelete.employee) {
      //console.log(id);
      const body = {
        employee: AssetAssignmentdelete.employee,
        asset: AssetAssignmentdelete.asset,
      };
      const headers = {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      };

      this.http
        .post('http://localhost:8080/deleteAssetAssignmentAsset', body, {
          headers,
        })
        .subscribe((data) => {
          // this.postId = data.id;
          alert('Asset assignment deleted');
          location.reload();
        });
    }
  }

  logstuff(smtg: any) {
    console.log('lgsutfffffff');
    console.log(smtg);
  }

  ngOnInit(): void {
    this.tableData = {
      headers: [],
      data: [],
    };
    this.tableDataAssets = {
      headers: [],
      data: [],
    };
    this.tableDataAssignments = {
      headers: [],
      data: [],
    };
    this.getEmployees();
    this.getAssets();
    this.getAssetAssignments();
  }

  render(headers: ITableHeader[], data: any) {
    //alert(headers);
    this.tableData = {
      headers: headers.filter((x) => x.isSelected),
      data: data,
    };
    this.allHeaders = headers;
    this.resetDragTracer();
    this.changeDetector.detectChanges();
  }

  renderAssets(headers: ITableHeader[], data: any) {
    //alert(headers);
    this.tableDataAssets = {
      headers: headers.filter((x) => x.isSelected),
      data: data,
    };
    this.allHeaders = headers;
    this.resetDragTracer();
    this.changeDetector.detectChanges();
  }

  renderAssetAssignments(headers: ITableHeader[], data: any) {
    //alert(headers);
    this.tableDataAssignments = {
      headers: headers.filter((x) => x.isSelected),
      data: data,
    };
    this.allHeaders = headers;
    this.resetDragTracer();
    this.changeDetector.detectChanges();
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  private resetDragTracer() {
    this.dragTrace = { src: -1, dest: -1 };
  }
}

export interface ITableHeader {
  key: string;
  index: number;
  isSelected: boolean;
}

export interface IDynamicTable {
  headers: ITableHeader[];
  data: any[];
}

export interface employee {
  id: string;
  username: string;
  dateOfBirth: string;
}

export interface asset {
  assetId: string;
  name: string;
}

export interface AssetAssignment {
  employee: employee;
  assets: asset[];
}

export interface AssetAssignmentdelete {
  employee: string;
  asset: string;
}

export interface employeeupdate {
  id: string;
  username: string;
  dateOfBirth: string;
  password: string;
}
