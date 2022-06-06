import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name=""
  userModel= new User("","","","",0);
  ngOnInit(): void {
    
  }
  onClick(username:any)
  {
  this.name=username;
  }
  
  getUsername(){
    return this.name;
  
  }

}
