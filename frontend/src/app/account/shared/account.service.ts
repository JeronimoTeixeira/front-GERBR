import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  login(user: any){
    return new Promise((resolve, reject)=>{
      window.localStorage.setItem('token','meu-token');
      resolve(true);
    })
  }
}
