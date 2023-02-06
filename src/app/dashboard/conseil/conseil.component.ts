import { Component, OnInit } from '@angular/core';
import { ConseilService } from 'src/app/Service/conseil/conseil.service';
import { TokenService } from 'src/app/Service/token/token.service';

@Component({
  selector: 'app-conseil',
  templateUrl: './conseil.component.html',
  styleUrls: ['./conseil.component.scss']
})
export class ConseilComponent implements OnInit {

  recherche:any=''
  nbreConseil:any=0
  nombrenonValide:any=0

  allConseils:any=[]

  constructor(private conseilService:ConseilService, private tokenService:TokenService){}
  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.conseilService.getAll().subscribe(res=>{
      this.allConseils=res.data
      this.nbreConseil=res.data.length
    })
  }
}
