import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  constructor(private http: HttpClient) { }

  records(filter){
    return this.http.post<any>(`${environment.api}/api/auth/measurer/measures-records`,filter);
  }

}
