import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) { }

  async login(user: any){
    const result = await this.http.post<any>(`${environment.api}/api/auth/login`, user).toPromise();
    // console.log(result)
    if(result && result.access_token){
      window.localStorage.setItem('type', result.type_user);
      window.localStorage.setItem('token',result.access_token)
      return true;
    }
    return false;
  }

  getAuthorizationToken(){
    const token = window.localStorage.getItem('token')
    return token;
  }
}
