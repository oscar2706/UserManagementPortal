import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor() { }

  ngOnInit(): void {
    this.users = [
      {
          "firstName":"Oscar",
          "lastName":"Patricio",
          "email":"oscar@email.com"
      },
      {
          "firstName":"Juan",
          "lastName":"Perez",
          "email":"juan@email.com"
      },
      {
          "firstName":"Leo",
          "lastName":"Amador",
          "email":"leo@email.com"
      },
      {
          "firstName":"Rebeca",
          "lastName":"Rubio",
          "email":"juan@email.com"
      },
      {
          "firstName":"Mayra",
          "lastName":"Montiel",
          "email":"juan@email.com"
      },
      {
          "firstName":"Dylan",
          "lastName":"Lozada",
          "email":"juan@email.com"
      },
      {
          "firstName":"Fany",
          "lastName":"Sarmiento",
          "email":"juan@email.com"
      },
      {
          "firstName":"Danae",
          "lastName":"Lopez",
          "email":"juan@email.com"
      },
      {
          "firstName":"Oliver",
          "lastName":"Fernandez",
          "email":"juan@email.com"
      }
  ]
  };
  

}
