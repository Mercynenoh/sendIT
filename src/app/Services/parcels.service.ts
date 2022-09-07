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
  addParcel(result:parcel){
    return this.http.post(this.baseUrl+'/Parcels', result)
  }
  showParcel():Observable<parcel[]>{
    return this.http.get<parcel[]>(this.baseUrl+'/Parcels')
  }
  deleteParcel(ParcelsId:string){
    return this.http.delete(`${this.baseUrl}${ParcelsId}`)
  }
}
