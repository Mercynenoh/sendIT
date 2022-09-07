import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { parcel } from '../Interfaces/parces';

@Injectable({
  providedIn: 'root'
})
export class ParcelsService {

  baseUrl:string ="http://localhost:3000"
  private httpOptions: any;

  constructor( private http:HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe:'body'
    }
  }
  addProject(data:parcel){
    return this.http.post<any>(this.baseUrl+'', data)
  }
  showParcel():Observable<parcel[]>{
    return this.http.get<parcel[]>(this.baseUrl+'/Parcels')
  }
  deleteproject(ProjectsId:string){
    return this.http.delete(`${this.baseUrl}${ProjectsId}`)
  }
}
