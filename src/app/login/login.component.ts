import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  clickMessage = '';
  onClickMe() {
    this.clickMessage = 'You are my hero!';
    this.clicked();
  }
  clicked() {
    // alert(this.clickMessage);

    const headers = {};
    const body = {
      username: 'admin',
      password: 'password',
    };
    this.http
      .post('http://localhost:8080/api/auth/login', {
        username: (<HTMLInputElement>document.getElementById('uname')).value,
        password: (<HTMLInputElement>document.getElementById('psw')).value,
      })
      .subscribe({
        next: (data) => {
          // this.postId = data.id;
          const resp = JSON.parse(JSON.stringify(data));
          const roles = resp.roles;
          const token = resp.token;
          if (data) alert(JSON.stringify(data));
          console.log(roles);
          console.log(token);
          localStorage.clear();
          localStorage.setItem('token', token);
          if (roles[0] === 'admin') {
            localStorage.setItem(
              'name',
              (<HTMLInputElement>document.getElementById('uname')).value
            );
            this.router.navigate([`manager`]);
          } else if (roles[0] === 'user') {
            localStorage.setItem(
              'username',
              (<HTMLInputElement>document.getElementById('uname')).value
            );
            this.router.navigate([`employee`]);
          }
        },
        error: (err) => {
          //console.error('error message', err.status);
          if (err.status === 401) {
            alert(JSON.stringify('Please use valid credentials'));
            this.router.navigate([`login`]);
          }
        },
        complete: () => console.info('complete'),
      });
  }

  ngOnInit(): void {}
}
