import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { Observable, finalize } from 'rxjs';
import { JeuService } from '../Service/jeu/jeu.service';
import { TokenService } from '../Service/token/token.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-jeu',
  templateUrl: './new-jeu.component.html',
  styleUrls: ['./new-jeu.component.scss']
})
export class NewJeuComponent implements OnInit{
  admin:any

  nom:any=''
  description:any=''

  isErrorBack:boolean=false

  erreurBack:any=''
  constructor(private router:Router,public afAuth: AngularFireAuth,private jeuService:JeuService,private snackBar: MatSnackBar,
    private tokenStorage:TokenService,private db: AngularFireDatabase, private storage: AngularFireStorage) { }


    ngOnInit(): void {
      this.admin=this.tokenStorage.getUser()
    }



    //upload de fichier
  pushFileToFirabase(fileUpload: File): Observable<any> {
    const filePath = `Fichiers/audio/${fileUpload.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          console.log(downloadURL)

          this.inscription(downloadURL)

        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }


  inscription(url:any){

  // var table=JSON.parse(localStorage.getItem('preferences')!) || []
  //
  var Jeu=[{
    'nom':this.nom,
    'description':this.description,
    'image':url,
    'user':{
      'id':this.admin.id
    },
    'problematiques':[

    ]
  }]

    console.log(Jeu)

    this.jeuService.Add(Jeu).subscribe(data=>{
      console.log(data)
      if(data.message=='ok'){

      }else{
        //console.log(data)
        this.isErrorBack=true
        this.erreurBack=data.data
      }

    },error=>{
      console.log(error.error.data)
      this.isErrorBack=true
      this.erreurBack=error.error.data
      this.snackBar.open(this.erreurBack, 'Fermer');
    })


    //this.router.navigate(['/dashboard'])
    //private fbJoueurService:FirebaseJoueurService,


  }
}
