import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class JeuService {

  private env=environment;

  constructor(private http:HttpClient, private tokenService:TokenService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  //liste des jeux
  listejeu():Observable<any>{
    console.log(this.httpOptions)
    return this.http.get(`${this.env.api}/jeu/listejeu`,this.httpOptions);
  }

  //nombre de jeu
  nombrejeu():Observable<any>{
    return this.http.get(`${this.env.api}/jeu/getnombre`,this.httpOptions);
  }

  Add(jeu:any):Observable<any>{
    var data=JSON.stringify(jeu).slice(1,JSON.stringify(jeu).lastIndexOf(']'));
    return this.http.post(`${this.env.api}/jeu/add`,data);
  }

  Update(jeu:any):Observable<any>{
    // const data:FormData=new FormData();
    // const user=[{"password": password,"pseudo": pseudo}]
    // data.append('agent', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    var data=JSON.stringify(jeu).slice(1,JSON.stringify(jeu).lastIndexOf(']'));
    return this.http.put(`${this.env.api}/problematique/update`,data);
  }
}
