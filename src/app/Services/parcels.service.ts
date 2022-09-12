import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { parcel } from '../Interfaces/parces';

@Injectable({
  providedIn: 'root'
})
export class ParcelsService {

  baseUrl:string ="http://localhost:3000"

  constructor( private http:HttpClient) {
  }
  addParcel(result:parcel):Observable<{message:string}>{
    return this.http.post<{message:string}>(this.baseUrl+'/Parcels', result)
  }
  showParcel():Observable<parcel[]>{
    return this.http.get<parcel[]>(this.baseUrl+'/Parcels')
  }
  getParcelDetails(id:number): Observable<parcel[]>{
    return this.http.get<parcel[]>(`${this.baseUrl}/Parcels/${id}`)
  }
  deleteParcel(id:number): Observable <{message:string}>{
    return this.http.delete<{message:string}>(`${this.baseUrl}/Parcels/${id}`)
  }
  getmyParcel(Senderemail:string): Observable<parcel[]>{
    return this.http.get<parcel[]>(`${this.baseUrl}/Parcels/${Senderemail}`)
  }
}
