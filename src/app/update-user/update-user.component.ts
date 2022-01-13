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
