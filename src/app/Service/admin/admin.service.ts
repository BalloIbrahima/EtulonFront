import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private env=environment;

  constructor(private http:HttpClient, private tokenService:TokenService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  //, 'token': 'bearer '+this.tokenService.getUser().data.token || ''
  login(username:String, password:any):Observable<any>{

    //const data:FormData=new FormData();

    const user={"password": password,"username": username}

    //console.log(this.httpOptions)
    // data.append('agent', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    // data.append('client', JSON.stringify(client).slice(1,JSON.stringify(client).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/user/login`,user,this.httpOptions);
  }



  create(admin:any):Observable<any>{
    return this.http.post(`${this.env.api}/user/create`,admin,this.httpOptions);
  }

  //liste des admins
  listeAdmin():Observable<any>{
    return this.http.get(`${this.env.api}/user/listeAdmin`,this.httpOptions);
  }

  //nombre d'admins
  nombreAdmin():Observable<any>{
    return this.http.get(`${this.env.api}/user/nbre/admin`,this.httpOptions);
  }

  //Deconnexion
  Deconnecter():Observable<any>{
    return this.http.post(`${this.env.api}/logout`,null);
  }

}
