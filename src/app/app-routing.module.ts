import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './dashboard/admin/admin.component';
import { CitoyenComponent } from './dashboard/citoyen/citoyen.component';
import { ConseilComponent } from './dashboard/conseil/conseil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { JeuComponent } from './dashboard/jeu/jeu.component';
import { ProblematiqueComponent } from './dashboard/problematique/problematique.component';
import { DashboardGuard } from './Guard/dashboard/dashboard.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "dashboard",component:DashboardComponent,canActivate:[DashboardGuard],
    children:[
      {path:"home",component:HomeComponent},
      {path:"jeu",component:JeuComponent},
      {path:"citoyen",component:CitoyenComponent},
      {path:"admin",component:AdminComponent},
      {path:"conseil",component:ConseilComponent},
      {path:"problematique",component:ProblematiqueComponent},

      {path: "", redirectTo:"home",pathMatch:'full'  },
      {path: "**", redirectTo:"home",pathMatch:'full'  },
    ]
  },
  {path:"login",component:LoginComponent},
  {path: "", redirectTo:"dashboard",pathMatch:'full'  },
  {path: "**", redirectTo:"dashboard",pathMatch:'full'  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
