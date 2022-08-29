import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private BASE_URL = 'http://apolis-grocery.herokuapp.com/api/auth';
  constructor(private http: HttpClient) {}
  register(data: any): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/register`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/login`, data);
  }

  // create method that is responsible for token things
  // check method to check if local storage has token
  checkToken() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
  logout() {
    localStorage.clear();
  }
}
