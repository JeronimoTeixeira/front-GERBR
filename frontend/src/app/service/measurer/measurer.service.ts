import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeasurerService {

  constructor(private http: HttpClient) { }

  consultMeasurers(){
    return this.http.post<any>(`${environment.api}/api/auth/measurer`,{});
  }

  registerMeasurer(value){
    return this.http.post<any>(`${environment.api}/api/auth/measurer/insert`,value);
  }

}
