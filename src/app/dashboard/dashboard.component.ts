import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {
  constructor(){}


  open(){
    $('#sidebar').toggleClass('active');
    //console.log('fffffff')
  }

  logout(){}
}
