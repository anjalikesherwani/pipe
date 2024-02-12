import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pipe';
  currentDate: Date=new Date();
  x:string = "My name is ANJALI";
  y:string = "My name is ANJALI";
  // z=0.567;
  z=0.34;
  a:{[key:string]:any}={
    b:1,
    c:"Hello World",
    d:123
  }

  students:any={
    ID:1, 
    Name:"Anjali",
    Age:25,
    City:"Allahabad" ,
    Country:"India",
    Gender:"female",
    DOB: new Date(),
    Fees:200
  };

}

