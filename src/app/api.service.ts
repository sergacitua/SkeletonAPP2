import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LocalDatabaseService } from './local-database.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient, private localDB: LocalDatabaseService) { }

  createProfile(profile: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/profiles/`, profile);
  }

  getProfiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/profiles/`).pipe(
      tap(profiles => {
        this.localDB.saveData('profiles', profiles);
      })
    );
  }

  authenticate(username: string, password: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/profiles/?username=${username}&password=${password}`).pipe(
      tap(user => {
        this.localDB.saveData('user', user);
      })
    );
  }

  syncData(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/sync`, data);
  }
}