import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/Service/admin/admin.service';
import { TokenService } from 'src/app/Service/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {

  constructor(private router:Router,private adminService:AdminService,private tokenService:TokenService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.adminService.listeAdmin().subscribe(res=>{
        console.log(res)
      },error => {
        if(error.status==403){
          this.tokenService.signOut();
          console.log(error)
          this.router.navigate(['/login'])
        }
      });
      return true;
  }

}
