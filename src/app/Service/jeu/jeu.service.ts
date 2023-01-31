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
}
