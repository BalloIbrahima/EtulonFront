import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProblematiqueService } from 'src/app/Service/problematique/problematique.service';

@Component({
  selector: 'app-problematique',
  templateUrl: './problematique.component.html',
  styleUrls: ['./problematique.component.scss']
})
export class ProblematiqueComponent implements OnInit{

  recherche:any
  problematiques:any=[];
  nombrePreblematique:any=0
  constructor(private router:Router,private problematiqueService:ProblematiqueService) {}


  ngOnInit(): void {
    this.getAllProblematiques()
  }


  getAllProblematiques(){
    this.problematiqueService.getAll().subscribe(res=>{
      this.problematiques=res.data;
      this.nombrePreblematique=res.data.length
      console.log(this.problematiques)
    },error=>{
      console.log(error)
    })
  }


  add(){

  }

}
