import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  name: string = '';
  lastName: string = '';
  email: string = '';

  display: boolean = false;

  showDialog() {
    this.display = true;
  }
  hideDialog(){
    this.display = false;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
