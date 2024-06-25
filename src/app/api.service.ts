import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  createProfile(profile: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/profiles/`, profile);
  }

  getProfiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/profiles/`);
  }

  authenticate(username: string, password: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/profiles/?username=${username}&password=${password}`);
  }
}