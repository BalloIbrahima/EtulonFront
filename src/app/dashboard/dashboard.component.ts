import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AdminService } from '../Service/admin/admin.service';
import { TokenService } from '../Service/token/token.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  admin:any;

  constructor(private tokenService: TokenService, private adminService:AdminService, private router:Router){}
  ngOnInit(): void {
    this.admin=this.tokenService.getUser().data
    if(!this.admin){
      console.log(this.admin)
      this.router.navigate(['/login'])
    }
    //console.log(this.admin)
  }



  open(){
    $('#sidebar').toggleClass('active');
    //console.log('fffffff')
  }

  logout() {
    this.tokenService.signOut()
    this.adminService.Deconnecter().subscribe(res=>{},error => {});
    this.router.navigate(['/login'])
  }



}
