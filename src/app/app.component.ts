import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FirstAngularProj';
  message = 'hello';
  currentBeverage = 'coffee';
  beverages = ['milk', 'tea', 'coffee', 'juice'];
  postId: number | undefined;

  addBeverage(newBeverage: string) {
    this.beverages.push(newBeverage);
  }
  constructor(private http: HttpClient, private router: Router) {
    this.loadPosts();
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  loadPosts() {
    /*
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((Response) => {
        // alert(JSON.stringify(Response));
      });

    const headers = {
      Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY2MzkwNDE2OSwiZXhwIjoxNjYzOTkwNTY5fQ.dOfhk4pk8451JIighMHgLNAKq9Fo4QHTGAdaouk2IYCJOXfoFFf15kmB_dAK-U15roaknHNQ6i7Pug-ThfM2gQ',
    };
    const body = { id: '6', username: 'Employee 66', dateOfBirth: '2/2/1997' };
    this.http
      .get(environment.URL+'+/dashboard', { headers, responseType: 'text' })
      .subscribe((data) => {
        // this.postId = data.id;
        alert(JSON.stringify(data));
      });

    this.http
      .post(environment.URL+'+/addEmployee', body, { headers })
      .subscribe((data) => {
        // this.postId = data.id;
        alert(JSON.stringify(data));
      });*/
  }
}
