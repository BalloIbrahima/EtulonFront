import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Service/admin/admin.service';
import { CitoyenService } from 'src/app/Service/citoyen/citoyen.service';
import { JeuService } from 'src/app/Service/jeu/jeu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{

  nbreCitoyen:any=0
  nbreAdmin:any=0
  nbreJeu:any=0


  constructor(private adminService:AdminService, private citoyenService:CitoyenService, private jeuService:JeuService){}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    //recuperation de nombre d'admin
    this.adminService.nombreAdmin().subscribe(res=>{
      this.nbreAdmin=res.data
    })

    //recuperation de nombre de citoyen
    this.citoyenService.nombreCitoyen().subscribe(res=>{
      this.nbreCitoyen=res.data
    })

    //recuperation du nombre de jeu
    this.jeuService.nombrejeu().subscribe(res=>{
      this.nbreJeu=res.data
    })
  }

}
