import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class ConseilService {

  constructor(private http:HttpClient,private tokenService:TokenService) { }
  private env=environment;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',Authorization: `Bearer ${this.tokenService.getToken()}`})
  };


  Add(conseil: any) :Observable<any>{
    const data=JSON.stringify(conseil).slice(1,JSON.stringify(conseil).lastIndexOf(']'))
    return this.http.post(`${this.env.api}/conseil/add`,data, this.httpOptions);
  }

  getAll() :Observable<any>{
    //const data=JSON.stringify(conseil).slice(1,JSON.stringify(conseil).lastIndexOf(']'))
    return this.http.get(`${this.env.api}/conseil/getall`, this.httpOptions);
  }

  GetParInteret(idUser:any):Observable<any>{
    //const data=JSON.stringify(conseil).slice(1,JSON.stringify(conseil).lastIndexOf(']'))
    return this.http.get(`${this.env.api}/conseil/getbyinterets/${idUser}`, this.httpOptions);
  }

  GetConseilForUser(idUser:any):Observable<any>{
    //const data=JSON.stringify(conseil).slice(1,JSON.stringify(conseil).lastIndexOf(']'))
    return this.http.get(`${this.env.api}/conseil/getAllConseil/${idUser}`, this.httpOptions);
  }


  GetNombreConseilForUser(idUser:any):Observable<any>{
    //const data=JSON.stringify(conseil).slice(1,JSON.stringify(conseil).lastIndexOf(']'))
    return this.http.get(`${this.env.api}/conseil/getnombre/${idUser}`, this.httpOptions);
  }


}
