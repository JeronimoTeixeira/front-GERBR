import { Router } from '@angular/router';
import { AccountService } from './../shared/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login = {
    email: '',
    password: ''
  }

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {  }

  ngOnInit(): void {
  }

  async onSubmit(){
    try{
      console.log(this.login)
      const result = await this.accountService.login(this.login)
      this.router.navigate(['']);
    }
    catch(error){
      console.log(error)
    }
  }

}
