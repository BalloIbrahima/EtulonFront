import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../Service/admin/admin.service';
import { CitoyenService } from '../Service/citoyen/citoyen.service';
import { JeuService } from '../Service/jeu/jeu.service';
import { NiveauService } from '../Service/niveau/niveau.service';

@Component({
  selector: 'app-detail-jeu',
  templateUrl: './detail-jeu.component.html',
  styleUrls: ['./detail-jeu.component.scss']
})
export class DetailJeuComponent implements OnInit {


  idJeu:any
  Jeu:any
  nom:any=''
  imageJeu:any
  ListNiveau:any=[]
  ListProblematique:any=[]
  descriptionJeu:any
  constructor(private adminService:AdminService, private citoyenService:CitoyenService, private jeuService:JeuService,
    private niveauService:NiveauService, private route:ActivatedRoute, private router:Router){}

  ngOnInit(): void {

    this.idJeu=this.route.snapshot.params['id']

    this.jeuService.GetJeu(this.idJeu).subscribe(retour=>{
      console.log(retour)
      this.Jeu=retour.data
      this.nom=this.Jeu.nom
      this.imageJeu=this.Jeu.image
      this.descriptionJeu=this.Jeu.description
      this.ListProblematique=this.Jeu.problematiques
      ///recuperation des niveaux
      this.niveauService.GetNiveauPourJeu(this.Jeu.id).subscribe(res=>{
        console.log(res)
        this.ListNiveau=res.data
      })
    })
  }

}
