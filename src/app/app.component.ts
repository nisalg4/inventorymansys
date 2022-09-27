import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../environments/environment';

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
  constructor(private http: HttpClient) {
    this.loadPosts();
  }
  logout() {
    localStorage.removeItem('token');
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
      .get('http://localhost:8080/dashboard', { headers, responseType: 'text' })
      .subscribe((data) => {
        // this.postId = data.id;
        alert(JSON.stringify(data));
      });

    this.http
      .post('http://localhost:8080/addEmployee', body, { headers })
      .subscribe((data) => {
        // this.postId = data.id;
        alert(JSON.stringify(data));
      });*/
  }
}
