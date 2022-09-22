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
  deleteNotification(id:number): Observable <Notify[]>{
    return this.http.delete<Notify[]>(`${this.baseUrl}/${id}`)
  }

  getOneNotification(email:String){
    return this.http.post<Notify[]>(this.baseUrl+'/one', email)
  }
}
