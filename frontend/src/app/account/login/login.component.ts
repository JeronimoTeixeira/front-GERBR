import { Router } from '@angular/router';
import { AccountService } from './../shared/account.service';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/service/notification/notification.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
    private router: Router,
    private notification: NotificationService,
  ) {  }

  ngOnInit(): void {
  }

  async onSubmit(){
    try{
      console.log(this.login)
      const result = await this.accountService.login(this.login)
      this.router.navigate(['']);
      this.notification.showSuccess('Login Successfully', 'Success')
    }
    catch(error){
      this.notification.showError(error.statusText,'ERRO')
    }
  }

}
