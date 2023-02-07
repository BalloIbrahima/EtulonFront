import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { Observable, finalize } from 'rxjs';
import { JeuService } from '../Service/jeu/jeu.service';
import { TokenService } from '../Service/token/token.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ProblematiqueService } from '../Service/problematique/problematique.service';

@Component({
  selector: 'app-new-jeu',
  templateUrl: './new-jeu.component.html',
  styleUrls: ['./new-jeu.component.scss']
})
export class NewJeuComponent implements OnInit{
  admin:any
  problematiques:any=[]
  nom:any=''
  description:any=''

  isErrorBack:boolean=false

  erreurBack:any=''

  problematiquesChoisis:any=[]

  imgChosed:any='https://firebasestorage.googleapis.com/v0/b/e-tulon.appspot.com/o/Fichiers%2FJeu%2Fimagejeu.jpeg?alt=media&token=138f427d-b5b1-4e8d-9179-1d759f04a9ea'
  fichier:any
  constructor(private router:Router,public afAuth: AngularFireAuth,private jeuService:JeuService,private snackBar: MatSnackBar,
    private problematiqueService:ProblematiqueService,
    private tokenStorage:TokenService,private db: AngularFireDatabase, private storage: AngularFireStorage) { }


    ngOnInit(): void {
      this.admin=this.tokenStorage.getUser()
      this.problematiqueService.getAll().subscribe(res=>{
        this.problematiques=res.data;
        console.log(this.problematiques)
      },error=>{
        console.log(error)
      })
    }


    Create(){

    for(let i=0; i<this.problematiques.length;i++){
      var checkbox= <HTMLInputElement>document.querySelector('#card'+i)
      if(checkbox.checked){
        this.problematiquesChoisis.push(this.problematiques[i])
      }
    }

    if(this.problematiquesChoisis.length==0){
      // this.isError=true
      // this.erreur='Veuillez selectionner au moins une problematique .'
    }else{
      localStorage.setItem('preferences',JSON.stringify(this.problematiquesChoisis))
      this.router.navigate(['/login'])
    }


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


  check(numero:any){
    var checkbox= <HTMLInputElement>document.querySelector('#card'+numero)
    var card=<HTMLDivElement>document.querySelector('.card'+numero)
    var i1= <HTMLInputElement>document.querySelector('#iok'+numero)
    var i2= <HTMLInputElement>document.querySelector('#ino'+numero)
    var img= <HTMLInputElement>document.querySelector('#img'+numero)

    if(checkbox.checked==true){
     card.style.backgroundColor='#fff'
     card.style.color='#000'
     //i2.style.color='#fff'
     i2.style.color='#fff'
     i1.classList.remove('d-none')
     i2.classList.add('d-none')
    }
    else{
     card.style.backgroundColor='#008000'
     card.style.color='#fff'
     i1.classList.add('d-none')
     i2.classList.remove('d-none')
     //card.style.border='4px solid green'
    }
    checkbox.checked=!checkbox.checked
   }
}
