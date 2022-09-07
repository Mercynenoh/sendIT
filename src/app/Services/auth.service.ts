import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Userr } from '../Interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = 'http://localhost:3000';
  private httpOptions: any;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'body',
    };
  }

  registerUser(data: Userr) {
    return this.http.post<Userr>(this.baseUrl + '/signup', data);
  }

  loginUser(data: Userr) {
    return this.http.post(this.baseUrl + '/login', data);
  }
  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
