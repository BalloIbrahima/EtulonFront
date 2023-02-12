import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Service/admin/admin.service';
import { CitoyenService } from 'src/app/Service/citoyen/citoyen.service';
import { JeuService } from 'src/app/Service/jeu/jeu.service';

@Component({
  selector: 'app-citoyen',
  templateUrl: './citoyen.component.html',
  styleUrls: ['./citoyen.component.scss']
})
export class CitoyenComponent implements OnInit {


  a!:any;
  responsive = true

  recherche:any=''
  nbreJCitoyenConseil:any=0
  nbreJCitoyenJoue:any=0
  nbreCitoyen:any=0

  allCitoyen:any=[]

  constructor(private adminService:AdminService, private citoyenService:CitoyenService, private jeuService:JeuService){}


  ngOnInit(): void {
    this.charge()
  }

  charge(){
    this.citoyenService.nombreCitoyenAyantConseil().subscribe(res=>{
      this.nbreJCitoyenConseil=res.data
    })

    //recuperation de nombre de citoyen
    this.citoyenService.nombreCitoyen().subscribe(res=>{
      this.nbreCitoyen=res.data
    })

    //recuperation du nombre de jeu
    this.citoyenService.nombreCitoyenAyantJoues().subscribe(res=>{
      this.nbreJCitoyenJoue=res.data
    })


    //recuperation des citoyens
    this.citoyenService.listeCitoyen().subscribe(res=>{
      this.allCitoyen=res.data
    })
  }

}
