import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private http:HttpClient,private tokenService:TokenService) { }
  private env=environment;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',Authorization: `Bearer ${this.tokenService.getToken()}`})
  };


  Add(score: any) :Observable<any>{
    const data=JSON.stringify(score).slice(1,JSON.stringify(score).lastIndexOf(']'))
    return this.http.post(`${this.env.api}/score/add`,data, this.httpOptions);
  }

  getUserScore(id:any):Observable<any>{
    return this.http.get(`${this.env.api}/score/getscore/${id}`,this.httpOptions);
  }


  getUserTime(id:any):Observable<any>{
    return this.http.get(`${this.env.api}/score/getminute/${id}`,this.httpOptions);
  }
}
