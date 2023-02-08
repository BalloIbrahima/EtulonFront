import { Component, OnInit } from '@angular/core';
import { ConseilService } from 'src/app/Service/conseil/conseil.service';
import { LikeService } from 'src/app/Service/like/like.service';
import { TokenService } from 'src/app/Service/token/token.service';

@Component({
  selector: 'app-conseil',
  templateUrl: './conseil.component.html',
  styleUrls: ['./conseil.component.scss']
})
export class ConseilComponent implements OnInit {

  recherche:any=''
  nbreConseil:any=0
  nombrenonValide:any=0

  today=new Date();


  allConseils:any=[]

  constructor(private conseilService:ConseilService, private tokenService:TokenService,
    private likeService:LikeService){}
  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.conseilService.getAll().subscribe(res=>{
      //this.allConseils=res.data
      console.log(res.data)
      this.nbreConseil=res.data.length
    })

    this.conseilService.getAttentes().subscribe(res=>{
      //this.allConseils=res.data
      console.log(res.data)
      this.nombrenonValide=res.data.length
    })


    this.conseilService.getActives().subscribe(res=>{
      this.allConseils=res.data
      console.log(res.data)

    })

    // this.conseilService.getRejets().subscribe(res=>{
    //   this.allConseils=res.data
    //   console.log(res.data)

    // })

  }


  //
  active(type:any){
    if(type=='attente'){
      this.conseilService.getAttentes().subscribe(res=>{
        this.allConseils=res.data
        console.log(res.data)

      })

    }else if(type=='rejet'){
      this.conseilService.getRejets().subscribe(res=>{
        this.allConseils=res.data
        console.log(res.data)

      })
    }else{
      this.conseilService.getActives().subscribe(res=>{
        this.allConseils=res.data
        console.log(res.data)

      })
    }
  }



  dateDiff(date1:any , date2:any){

    date1=new Date(date1)

    // console.log(date1)
    // console.log(date2)


    var diff:any = {} ;                          // Initialisation du retour
    var tmp = date2 - date1;

    // console.log(tmp)

    tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
    diff.sec = tmp % 60;                    // Extraction du nombre de secondes

    tmp = Math.floor((tmp-diff.sec)/60);    // Nombre de minutes (partie entière)
    diff.min = tmp % 60;                    // Extraction du nombre de minutes

    tmp = Math.floor((tmp-diff.min)/60);    // Nombre d'heures (entières)
    diff.hour = tmp % 24;                   // Extraction du nombre d'heures

    tmp = Math.floor((tmp-diff.hour)/24);   // Nombre de jours restants
    diff.day = tmp;

    if (diff.day==0){
      if(diff.hour==0){
        if(diff.min==0){
          return "A l'instant "
        }else{
          if(diff.min>1){
            return "Il y'a "+ diff.min +' minutes'

          }else{
            return "Il y'a "+ diff.min +' minute'

          }
        }
      }else{
        if(diff.hour>1){
          return "Il y'a "+ diff.hour +' heures'
        }else{
          return "Il y'a "+ diff.hour +' heure'
        }
      }

    }else{
      if(diff.day>30){
        // return "Il y'a "+ date1
        return date1
      }else if(diff.day>1){
        return "Il y'a "+ diff.day +' jours'
      }
      else{
        return "Il y'a "+ diff.day +' jour'
      }
    }
  }


  //lecture du fichier enregistre
  async PlayFile(fileName:any,i:any) {

    var durre=0;
    var total=0
    if(fileName!=null){
      try {
        this.Play(i)
      } catch (error) {

      }
      console.log(fileName)

      // if(this.isPlaying){

      // }else{
        //const audioRef=new Audio(`data:audio/aac;base64,${fileName}`)

      const audioRef=new Audio(`${fileName}`)
      audioRef.oncanplaythrough=()=>audioRef.play();

      audioRef.load();
      //this.counter=
      total=audioRef.duration
      durre=audioRef.duration

      var currentMinute=<HTMLParagraphElement>document.querySelector('.audio'+i)
      currentMinute.textContent=audioRef.currentTime+''

    }



    var audio=<HTMLProgressElement>document.querySelector('.audio'+i)

    durre-=1
    audio.value=1 - (durre/(total+1))
    setTimeout(() => {
      this.PlayFile(null,i)
    }, 1000);


  }


  Play(i:any){
    var doc=<HTMLElement>document.querySelector('.none'+i)
    var vue=<HTMLElement>document.querySelector('.play'+i)

    doc.classList.remove('none'+i)
    doc.classList.remove('d-none')
    doc.classList.add('play'+i)


    vue.classList.add('d-none')
    vue.classList.add('none'+i)
    vue.classList.remove('play'+i)

  }

}
