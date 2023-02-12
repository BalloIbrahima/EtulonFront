import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './dashboard/home/home.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { JeuComponent } from './dashboard/jeu/jeu.component';
import { CitoyenComponent } from './dashboard/citoyen/citoyen.component';
import { httpInterceptorProviders } from './Helpers/http.interceptor';
import { NgChartsModule } from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminComponent } from './dashboard/admin/admin.component';
import { ConseilComponent } from './dashboard/conseil/conseil.component';
import { ProblematiqueComponent } from './dashboard/problematique/problematique.component';
import { ProblemaComponent } from './Modals/problema/problema.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ColorSketchModule } from 'ngx-color/sketch';
import { EditproblemaComponent } from './Modals/editproblema/editproblema.component';
import { NewJeuComponent } from './new-jeu/new-jeu.component';
import { NewConseilComponent } from './new-conseil/new-conseil.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import player from 'lottie-web';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { LottieModule } from 'ngx-lottie';

import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DetailJeuComponent } from './detail-jeu/detail-jeu.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DetailCitoyenComponent } from './detail-citoyen/detail-citoyen.component';

export function playerFactory() {
  return import('lottie-web');
}


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    JeuComponent,
    CitoyenComponent,
    AdminComponent,
    ConseilComponent,
    ProblematiqueComponent,
    ProblemaComponent,
    EditproblemaComponent,
    NewJeuComponent,
    NewConseilComponent,
    DetailJeuComponent,
    DetailCitoyenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    NgChartsModule,
    NgxPaginationModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    ColorSketchModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    LottieModule.forRoot({player:playerFactory}),
    HttpClientModule,
    MatSnackBarModule,
    MatProgressBarModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  entryComponents: [
    ProblemaComponent
  ],
  providers: [httpInterceptorProviders,{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent]
})
export class AppModule { }
