import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) { }


  consultDay(value){
    return this.http.post<any>(`${environment.api}/api/auth/measurer/measures`,value);
  }

  consultMonth(value){
    return this.http.post<any>(`${environment.api}/api/auth/measurer/measures-month`,value);
  }

  consultWeek(value){
    return this.http.post<any>(`${environment.api}/api/auth/measurer/measures-week`,value);
  }

  consultCoordinates(value){
    return this.http.get<any>(`https://api.mapbox.com/geocoding/v5/mapbox.places/${value.address}.json?country=BR&access_token=${value.token}`)
  }
  
}
