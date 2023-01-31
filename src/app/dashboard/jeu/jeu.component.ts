import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Service/admin/admin.service';
import { CitoyenService } from 'src/app/Service/citoyen/citoyen.service';
import { JeuService } from 'src/app/Service/jeu/jeu.service';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.scss']
})
export class JeuComponent implements OnInit{


  nbreJeu:number=0
  constructor(private adminService:AdminService, private citoyenService:CitoyenService, private jeuService:JeuService){}


  ngOnInit(): void {

    //recuperation du nombre de jeu
    this.jeuService.nombrejeu().subscribe(res=>{
      this.nbreJeu=res.data
    })
  }
}
