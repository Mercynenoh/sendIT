import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Userr } from '../Interfaces/user';
export interface image{
  image:string
  Bio:string
}
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  baseUrl:string ="http://localhost:5000/user"

  constructor(private http: HttpClient) {}


  public uploadImage(image: File): Observable<any> {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post('/api/v1/image-upload', formData);
  }
  addimage(id:number): Observable <{message:string}>{
    return this.http.get<{message:string}>(`${this.baseUrl}/get`)
  }
  seeimage(id:number): Observable<Userr[]>{
    return this.http.get<Userr[]>(`${this.baseUrl}/all/${id}`)
  }
}
