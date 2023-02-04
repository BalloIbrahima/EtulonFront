import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ColorEvent } from 'ngx-color';
import { ProblematiqueService } from 'src/app/Service/problematique/problematique.service';
import { TokenService } from 'src/app/Service/token/token.service';

@Component({
  selector: 'app-problema',
  templateUrl: './problema.component.html',
  styleUrls: ['./problema.component.scss']
})
export class ProblemaComponent implements OnInit {
  nom:any=''
  color:any='#fff'
  data:any
  id:any=null
  admin:any
  constructor(private problematiqueService:ProblematiqueService,
    public dialogRef: MatDialogRef<ProblemaComponent>,
    private tokenService:TokenService
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  ngOnInit(): void {
    this.admin=this.tokenService.getUser()
  }

  onNoClick(): void {
    this.dialogRef.close(this.color);

  }

  changeComplete($event: ColorEvent) {
    console.log($event.color.hex);
    this.color=$event.color.hex
  }

  create(){
    var problematique=[{
      'id':this.id,
      'libelle':this.nom,
      'couleur':this.color,
      'user':this.admin
    }]

    this.problematiqueService.Add(problematique).subscribe(res=>{
      console.log(res)
      this.dialogRef.close(res.message);
    })
  }

}
