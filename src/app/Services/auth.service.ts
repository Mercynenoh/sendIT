import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginuser, Userr } from '../Interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = 'http://localhost:5000/user';
  private httpOptions: any;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'body',
    };
  }

  registerUser(data: Userr):Observable<{message:string}> {
    return this.http.post<{message:string}>(this.baseUrl + '/signup', data);
  }

  loginUser(data:loginuser): Observable<any>{
    return this.http.post<any>(this.baseUrl+'/login/',data)
  }
  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
  showUsers():Observable<Userr[]>{
    return this.http.get<Userr[]>(this.baseUrl+'/all')
  }
}
