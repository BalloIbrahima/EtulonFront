import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { finalize, Observable } from 'rxjs';
import { JeuService } from '../Service/jeu/jeu.service';
import { ProblematiqueService } from '../Service/problematique/problematique.service';
import { TokenService } from '../Service/token/token.service';

@Component({
  selector: 'app-new-niveau',
  templateUrl: './new-niveau.component.html',
  styleUrls: ['./new-niveau.component.scss']
})
export class NewNiveauComponent implements OnInit {
  problematiques:any=[]
  nom:any=''
  description:any=''
  Jeu:any

  isErrorBack:boolean=false

  erreurBack:any=''

  imgChosed:any='https://firebasestorage.googleapis.com/v0/b/e-tulon.appspot.com/o/Fichiers%2FJeu%2Fimagejeu.jpeg?alt=media&token=138f427d-b5b1-4e8d-9179-1d759f04a9ea'
  fichier:any=null
  constructor(private router:Router,public afAuth: AngularFireAuth,private jeuService:JeuService,private snackBar: MatSnackBar,
    private problematiqueService:ProblematiqueService,
    private tokenStorage:TokenService,private db: AngularFireDatabase, private storage: AngularFireStorage) { }


  ngOnInit(): void {
    //this.admin=this.tokenStorage.getUser()
  }



  Create(){

  }




  //upload de fichier
  pushFileToFirabase(fileUpload: File): Observable<any> {
    const filePath = `Fichiers/Niveau/${fileUpload.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          console.log(downloadURL)

          this.newNivead(downloadURL)

        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }


  newNivead(url:any){

  }





  changeFile(e:any){
    //verification si une photo a été choisie ou pas
    if(!e.target.files[0] || e.target.files[0].length==0){
      // this.message="Vous devez choisir une image !";
      // this.erreur=true;
      return;
    }

    //verification du type de fichier choisi pour recaler si ce n'est pas une photo
    var typeFichier=e.target.files[0].type;
    //this.imgChosed=e.target['files'];


    if(e.target.files){
      var reader= new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.imgChosed=event.target.result;
        this.fichier=e.target['files'][0];
      }
    }
  }


  changeImage(){
    var input=<HTMLElement>document.querySelector('.imgAfficheur')
    input.click()
  }


}
