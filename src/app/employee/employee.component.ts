import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  name = localStorage.getItem('username');
  public constructor(
    private changeDetector: ChangeDetectorRef,
    private http: HttpClient,
    private router: Router
  ) {}

  //data1 = [JSON.parse(this.data) as IAccountBalance];
  tableData: IDynamicTable | undefined;
  allHeaders: ITableHeader[] | undefined;
  dragTrace: { src: number; dest: number } | undefined;

  disptoken() {
    //alert(localStorage.getItem('token'));
    //alert(localStorage.getItem('username'));

    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    const datafromapi = this.http
      .get(
        'http://localhost:8080/AssetAssignment/employeeName/' +
          localStorage.getItem('username'),
        { headers }
      )
      .subscribe((data) => {
        // this.postId = data.id;
        //alert(data);
        const headersfortable = ['name'].map(
          (x, i) => ({ key: x, index: i, isSelected: true } as ITableHeader)
        );

        this.render(headersfortable, data);
      });

    //alert(this.data1);
  }
  ngOnInit(): void {
    this.tableData = {
      headers: [],
      data: [],
    };
    this.disptoken();
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
  private resetDragTracer() {
    this.dragTrace = { src: -1, dest: -1 };
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
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

export interface assets {
  assetId: string;
  name: string;
}
