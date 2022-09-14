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
  addParcel(result:parcel):Observable<{message:string}>{
    return this.http.post<{message:string}>(this.baseUrl+'/add', result)
  }
  showParcel():Observable<parcel[]>{
    return this.http.get<parcel[]>(this.baseUrl+'/get')
  }
  getParcelDetails(id:number): Observable<parcel[]>{
    return this.http.get<parcel[]>(`${this.baseUrl}/${id}`)
  }
  deleteParcel(id:number): Observable <{message:string}>{
    return this.http.delete<{message:string}>(`${this.baseUrl}/${id}`)
  }
  getmyParcel(Senderemail:string): Observable<parcel[]>{
    return this.http.get<parcel[]>(`${this.baseUrl}/${Senderemail}`)
  }
}
