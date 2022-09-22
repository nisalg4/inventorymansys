import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';
import {from, Observable, Subject, Subscriber} from 'rxjs';
import {filter,map} from 'rxjs/operators';
import {of,pipe} from 'rxjs';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {
@Input() beverage="tea";
@Output() newBeverageEvent=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  addNewBeverage(value: string){
    this.newBeverageEvent.emit(value);
  }

}
//filter
const source=from([1,2,3,4,5]);
const example=source.pipe(filter(num=>num%2 === 0));
const subscribe=example.subscribe(val=>console.log('Even number: ${val}'));

//Map
const nums=of(1,2,3,4,5);
const squareOddVals=pipe(
  filter((n:number)=>n%2!==0),map(n=>n*n)
);

const squreOdd=squareOddVals(nums);

squreOdd.subscribe(x=>console.log(x));

//Subjects
const subject=new Subject<number>();
subject.subscribe({next:(v)=>console.log('observerA: ${v}'),});
subject.subscribe({next: (v)=>console.log('observerB: ${v}'),});

subject.next(1);
subject.next(2);

//Observable
const foo=new Observable((subscriber)=>{
  console.log('Hello');
  subscriber.next(42);
});

foo.subscribe((x)=>{
  console.log(x);
});

foo.subscribe((y)=>{
  console.log(y);
});

