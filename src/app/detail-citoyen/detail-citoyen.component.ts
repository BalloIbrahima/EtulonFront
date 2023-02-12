import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../Service/admin/admin.service';
import { CitoyenService } from '../Service/citoyen/citoyen.service';
import { ConseilService } from '../Service/conseil/conseil.service';
import { JeuService } from '../Service/jeu/jeu.service';
import { NiveauService } from '../Service/niveau/niveau.service';

@Component({
  selector: 'app-detail-citoyen',
  templateUrl: './detail-citoyen.component.html',
  styleUrls: ['./detail-citoyen.component.scss']
})
export class DetailCitoyenComponent implements OnInit{

  idCitoyen:any
  citoyen:any
  nom:any=''
  username:any=''
  img:any=''

  nbreConseil:any=0

  constructor(private adminService:AdminService, private citoyenService:CitoyenService, private jeuService:JeuService,
    private niveauService:NiveauService, private route:ActivatedRoute, private router:Router,private conseilService:ConseilService){}

    ngOnInit(): void {
      this.idCitoyen=this.route.snapshot.params['id']

      this.citoyenService.getCitoyen(this.idCitoyen).subscribe(res=>{
        this.citoyen=res.data
        this.nom=this.citoyen.nom
        this.username=this.citoyen.username
        this.img=this.citoyen.photo

        this.conseilService.GetNombreConseilForUser(this.citoyen.id).subscribe(res=>{
          this.nbreConseil=res.data
        })
      })

    }
}
