import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  recherche:any=''

  allJeux:any=[]
  listPlay:any=[]
  listLike:any=[]

  constructor(private adminService:AdminService, private citoyenService:CitoyenService, private jeuService:JeuService,
    private route:ActivatedRoute, private router:Router){}


  ngOnInit(): void {



    //recuperation du nombre de jeu
    this.jeuService.nombrejeu().subscribe(res=>{
      this.nbreJeu=res.data
    })
    //
    this.jeuService.listejeu().subscribe(res=>{
      console.log(res)
      this.allJeux=res.data
      this.getNbre()
    })




  }

  // addJeu(){
  //   this.router.navigate(['/dahboard/nouveaujeu'])
  // }



  getNbre(){
    this.allJeux.forEach((element: { id: any; }) => {

      this.jeuService.GetNombreDeLike(element.id).subscribe(res=>{
        console.log(res.data)
        this.listLike.push({
          id:element.id,
          nombre:res.data
        })
      })

      this.jeuService.GetNombreFoisJoue(element.id).subscribe(res=>{
        console.log(res.data)
        this.listPlay.push({
          id:element.id,
          nombre:res.data
        })
      })
    })
  }

  getNbreFoisJoue(id:any){
    var nbre=30
    this.listPlay.forEach((element: { id: any; nombre: number; }) => {
      if(element.id=id){
        nbre=element.nombre
      }
    });

    return nbre;
  }

  getNbreLike(id:any){
    var nbre=30
    this.listLike.forEach((element: { id: any; nombre: number; }) => {
      if(element.id=id){
        nbre=element.nombre
      }
    });

    return nbre;
  }



}
