import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { image } from '../userdashboard/profile/profile.component';

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
  addImage(image: File):Observable<{message:string}>{
    return this.http.post<{message:string}>(this.baseUrl+'/add', image)
  }
  seeimage():Observable<image[]>{
    return this.http.get<image[]>(this.baseUrl+'/profiles')
  }
}
