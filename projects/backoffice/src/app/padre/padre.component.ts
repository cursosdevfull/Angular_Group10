import { Component, OnInit } from '@angular/core';

/* export interface User {
  id: number;
  name: string;
  age: number;
  lastname: string;
} */

export class User {
  name: string;
  age: number;

  constructor(name2: string, age2: number) {
    this.ageAllowed(age2);
    this.name = name2;
    this.age = age2;
  }

  ageAllowed(age: number) {
    if (age < 18) {
      throw new Error('Age min is 18');
    }
  }
}

export type TUser = User[]; // Array<User>

@Component({
  selector: 'amb-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent implements OnInit {
  currentDate = new Date();

  users: TUser = [
    new User('Sergio', 40),
    new User('Juan', 30),
    new User('Pedro', 20),
    new User('Santiago', 40),
  ];

  constructor() {
    setInterval(() => (this.currentDate = new Date()), 1000);
    setTimeout(() => this.users.pop(), 6000);
  }

  showAlert(msg: User) {
    alert(JSON.stringify(msg));
  }

  ngOnInit(): void {}
}
