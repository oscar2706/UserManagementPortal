import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  name: string = '';
  lastName: string = '';
  email: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
