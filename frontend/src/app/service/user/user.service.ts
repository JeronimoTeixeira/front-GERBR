import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  consultUser(){
    return this.http.post<any>(`${environment.api}/api/auth/users`,{});
  }

  registerUser(value){
    return this.http.post<any>(`${environment.api}/api/auth/register`,value)
  }
  
}
