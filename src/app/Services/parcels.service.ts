import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { parcel } from '../Interfaces/parces';

@Injectable({
  providedIn: 'root'
})
export class ParcelsService {

  baseUrl:string ="http://localhost:5000/parcels"

  constructor( private http:HttpClient) {
  }
  addParcel(result:parcel){
    const token = localStorage.getItem('token') as string;
    return this.http.post<parcel>(this.baseUrl+'/add', result,
    {

      headers: new HttpHeaders({ token}),

    })

  }
  showParcel():Observable<parcel[]>{
    const token = localStorage.getItem('token') as string;
    return this.http.get<parcel[]>(this.baseUrl+'/get',
    {

      headers: new HttpHeaders({ token}),

    })
  }
  getParcelDetails(id:number): Observable<parcel[]>{
    const token = localStorage.getItem('token') as string;
    return this.http.get<parcel[]>(`${this.baseUrl}/${id}`,
    {

      headers: new HttpHeaders({ token}),

    })
  }
  deleteParcel(id:number): Observable <{message:string}>{
    const token = localStorage.getItem('token') as string;
    return this.http.delete<{message:string}>(`${this.baseUrl}/delete/${id}`,
    {

      headers: new HttpHeaders({ token}),

    })
  }
  updateDelivered(id:number): Observable <{message:string}>{
    const token = localStorage.getItem('token') as string;
    return this.http.get<{message:string}>(`${this.baseUrl}/update/${id}`,
    {

      headers: new HttpHeaders({ token}),

    }   )
  }
  getmyParcel(Senderemail:string): Observable<parcel[]>{
    const token = localStorage.getItem('token') as string;
    return this.http.get<parcel[]>(`${this.baseUrl}/${Senderemail}`,
    {

      headers: new HttpHeaders({ token}),

    } )
  }
  updateparcel(id:number,data:parcel): Observable <any>{
    const token = localStorage.getItem('token') as string;
    return this.http.put<any>(`${this.baseUrl}/edit/${id}`,data,
    {

      headers: new HttpHeaders({ token}),

    })
  }
}
