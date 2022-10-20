import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { asset } from '../manager.component';

@Component({
  selector: 'app-assetupdateform',
  templateUrl: './assetupdateform.component.html',
  styleUrls: ['./assetupdateform.component.css'],
})
export class AssetupdateformComponent {
  asset: any;
  constructor(
    public dialogRef: MatDialogRef<AssetupdateformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: asset,
    private http: HttpClient
  ) {}

  updateAsset() {
    var assetId = this.data.assetId;
    var assetName = this.data.name;

    if (assetId && assetName) {
      //console.log(id);
      const body = { assetId: assetId, name: assetName };
      const headers = {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      };

      this.http
        .post('http://localhost:8080/updateAsset', body, { headers })
        .subscribe((data) => {
          // this.postId = data.id;
          alert('Asset updated');
          location.reload();
        });
    }
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
