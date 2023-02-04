import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProblematiqueService {

  private env=environment;

  constructor(private http:HttpClient) { }



  getAll():Observable<any>{
    // const data:FormData=new FormData();
    // const user=[{"password": password,"pseudo": pseudo}]
    // data.append('agent', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    return this.http.get(`${this.env.api}/problematique/getall`);
  }

  Add(problematique:any):Observable<any>{
    // const data:FormData=new FormData();
    // const user=[{"password": password,"pseudo": pseudo}]
    // data.append('agent', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    var data=JSON.stringify(problematique).slice(1,JSON.stringify(problematique).lastIndexOf(']'));
    return this.http.post(`${this.env.api}/problematique/add`,data);
  }

  Update(problematique:any):Observable<any>{
    // const data:FormData=new FormData();
    // const user=[{"password": password,"pseudo": pseudo}]
    // data.append('agent', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    var data=JSON.stringify(problematique).slice(1,JSON.stringify(problematique).lastIndexOf(']'));
    return this.http.post(`${this.env.api}/problematique/update`,data);
  }
}
