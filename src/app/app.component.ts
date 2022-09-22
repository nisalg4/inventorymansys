import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngularProj';
  message='hello';
  currentBeverage="coffee";
  beverages=['milk','tea','coffee','juice'];

  addBeverage(newBeverage: string){
    this.beverages.push(newBeverage);
  }
  constructor(private http: HttpClient){
    this.loadPosts();
  }
  loadPosts(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((Response)=>{
      alert(JSON.stringify(Response));
    })
  }
}
