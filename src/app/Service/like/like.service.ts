import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private http:HttpClient,private tokenService:TokenService) { }
  private env=environment;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',Authorization: `Bearer ${this.tokenService.getToken()}`})
  };

  create(like:any,idConseil:any):Observable<any>{
    const data=JSON.stringify(like).slice(1,JSON.stringify(like).lastIndexOf(']'))
    return this.http.post(`${this.env.api}/jaime/addConseil/${idConseil}`,data,this.httpOptions);
  }


  getUsersLikes(idUser:any):Observable<any>{
    return this.http.get(`${this.env.api}/jaime/getuser/${idUser}`,this.httpOptions);
  }

  delete(idUser:any,idConseil:any):Observable<any>{
    return this.http.delete(`${this.env.api}/jaime/delete/${idUser}/${idConseil}`,this.httpOptions);
  }

  isLiked(idUser:any,idConseil:any):Observable<any>{
    return this.http.get(`${this.env.api}/jaime/isliked/${idUser}/${idConseil}`,this.httpOptions);
  }
}
