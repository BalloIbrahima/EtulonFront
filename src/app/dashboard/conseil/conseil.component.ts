import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conseil',
  templateUrl: './conseil.component.html',
  styleUrls: ['./conseil.component.scss']
})
export class ConseilComponent implements OnInit {

  recherche:any=''
  nbreConseil:any=0
  nombrenonValide:any=0
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
