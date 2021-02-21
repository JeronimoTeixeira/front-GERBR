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
    console.log(result)
    if(result && result.access_token){
      window.localStorage.setItem('token','meu-token')
      return true;
    }
    return false;
  }
}
