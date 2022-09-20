import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notify } from '../Interfaces/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  baseUrl:string ="http://localhost:5000/notification"

  constructor( private http:HttpClient) {
  }

  getall():Observable<Notify[]>{
    return this.http.get<Notify[]>(this.baseUrl)
  }
}
