import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ColorEvent } from 'ngx-color';
import { ProblematiqueService } from 'src/app/Service/problematique/problematique.service';
import { TokenService } from 'src/app/Service/token/token.service';
import { ProblemaComponent } from '../problema/problema.component';

@Component({
  selector: 'app-editproblema',
  templateUrl: './editproblema.component.html',
  styleUrls: ['./editproblema.component.scss']
})
export class EditproblemaComponent  implements OnInit{

  color:any
  nom:any

  constructor(private problematiqueService:ProblematiqueService,
    public dialogRef: MatDialogRef<ProblemaComponent>,
    private tokenService:TokenService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  ngOnInit(): void {
    this.color=this.data.couleur
    this.nom=this.data.libelle
    console.log(this.data)
  }

  onNoClick(): void {
    this.dialogRef.close(this.color);

  }

  changeComplete($event: ColorEvent) {
    console.log($event.color.hex);
  }

  Update(){
    var problematique=[this.data]

    this.problematiqueService.Update(problematique).subscribe(res=>{
      console.log(res)
      this.dialogRef.close(res.message);
    })
  }

}
