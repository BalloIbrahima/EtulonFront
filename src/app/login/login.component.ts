import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../Service/admin/admin.service';
import { TokenService } from '../Service/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username:any
  password:any


  Iserror!: Boolean;
  erreur!: String;

  log:any;
  constructor(private router:Router, private adminService:AdminService,private tokenStorage: TokenService){}

  ngOnInit(): void {
    //if
    //throw new Error('Method not implemented.');
    if(this.tokenStorage.getUser().data){
    //   console.log(this.tokenStorage.getUser().data)

      this.router.navigate(['/dashboard'])
    }
  }


  login(f:NgForm){
    this.Iserror=false;

      this.adminService.login(this.username,this.password).subscribe({
        next:data=>{
          console.log(data)
          this.tokenStorage.saveToken(data.token);
          this.tokenStorage.saveUser(data);
          this.router.navigate(['/dashboard'])
      },error: error => {
        console.log(error.error)
        // this.errorMessage = err.error.message;
        // this.isLoginFailed = true;
        if(error.error.data=="Bad credentials"){
          this.Iserror=true;
          console.log(error.status)
          this.erreur="Username ou mots de passe incorrect !"

        }
      }})

  }


//   ngOnDestroy(){
//     this.log.unsubscribe();
//  }
}
