import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class CitoyenService {

  private env=environment;

  constructor(private http:HttpClient, private tokenService:TokenService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  creerCitoyen(citoyen:any){

  }

  //liste des citoyens
  listeCitoyen():Observable<any>{
    console.log(this.httpOptions)
    return this.http.get(`${this.env.api}/user/listeCitoyen`,this.httpOptions);
  }

  //nombre de citoyen
  nombreCitoyen():Observable<any>{
    return this.http.get(`${this.env.api}/user/nbre/citoyen`,this.httpOptions);
  }


  //nombre de citoyen ayant joues
  nombreCitoyenAyantJoues():Observable<any>{
    return this.http.get(`${this.env.api}/user/nombre/ayentjoues`,this.httpOptions);
  }

  //nombre de citoyen ayant donnes conseils
  nombreCitoyenAyantConseil():Observable<any>{
    return this.http.get(`${this.env.api}/user/nombre/ayentconseils`,this.httpOptions);
  }

}
