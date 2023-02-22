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
    return this.http.get(`${this.env.api}/jeu/getall`,this.httpOptions);
  }

  //nombre de jeu
  nombrejeu():Observable<any>{
    return this.http.get(`${this.env.api}/jeu/getnombre`,this.httpOptions);
  }

  Add(jeu:any):Observable<any>{
    var data=JSON.stringify(jeu).slice(1,JSON.stringify(jeu).lastIndexOf(']'));
    return this.http.post(`${this.env.api}/jeu/add`,data,this.httpOptions);
  }

  Update(jeu:any):Observable<any>{
    // const data:FormData=new FormData();
    // const user=[{"password": password,"pseudo": pseudo}]
    // data.append('agent', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    var data=JSON.stringify(jeu).slice(1,JSON.stringify(jeu).lastIndexOf(']'));
    return this.http.put(`${this.env.api}/problematique/update`,data);
  }


  GetByProb(id: any) :Observable<any>{
    //const data:FormData=new FormData();
    //data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    //const data=JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']'))
    return this.http.get(`${this.env.api}/jeu/getJeux/${id}`,this.httpOptions);

    //console.log(this.httpOptions)
    // data.append('agent', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    // data.append('client', JSON.stringify(client).slice(1,JSON.stringify(client).lastIndexOf(']')));
  }

  GetJeu(id: any) :Observable<any>{

    return this.http.get(`${this.env.api}/jeu/get/${id}`,this.httpOptions);
  }

  Get20() :Observable<any>{
    console.log(this.httpOptions)

    return this.http.get(`${this.env.api}/jeu/getlast`,this.httpOptions);
  }

  GetNombreDeLike(id:any):Observable<any>{
    return this.http.get(`${this.env.api}/jeu/getNbreLike/${id}`,this.httpOptions);
  }

  GetNombreFoisJoue(id:any):Observable<any>{
    return this.http.get(`${this.env.api}/jeu/getNbreFois/${id}`,this.httpOptions);
  }

  GetNombreJeuJoue(idUser:any):Observable<any>{
    return this.http.get(`${this.env.api}/jeu/getNbreJeu/${idUser}`,this.httpOptions);
  }



  UserLastGameLikst(idUser:any,nombre:any):Observable<any>{
    return this.http.get(`${this.env.api}/user/mesderniersjeux/${idUser}/${nombre}`,this.httpOptions);
  }



  GetBestPlayed() :Observable<any>{
    console.log(this.httpOptions)
    return this.http.get(`${this.env.api}/jeu/getBestPlayed`,this.httpOptions);
  }

  getPreferences(idUser:Number):Observable<any>{
    return this.http.get(`${this.env.api}/user/preferences/${idUser}`,this.httpOptions);
  }

}
