import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  public user = {
    name: '',
    email: '',
    password: ''
  }
  constructor(private userService: UserService) { 
  }

  ngOnInit(): void {
  }

  insert(){
    this.userService.registerUser(this.user).subscribe(response =>{
      console.log(response);
    })
  }



}
