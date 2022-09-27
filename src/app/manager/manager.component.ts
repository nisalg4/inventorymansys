import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})
export class ManagerComponent implements OnInit {
  constructor() {}
  disptoken() {
    alert(localStorage.getItem('token'));
  }

  ngOnInit(): void {}
}
