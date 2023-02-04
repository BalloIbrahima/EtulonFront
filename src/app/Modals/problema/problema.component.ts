import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ColorEvent } from 'ngx-color';

@Component({
  selector: 'app-problema',
  templateUrl: './problema.component.html',
  styleUrls: ['./problema.component.scss']
})
export class ProblemaComponent {
  nom:any
  color:any='#fff'
  constructor(
    public dialogRef: MatDialogRef<ProblemaComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  changeComplete($event: ColorEvent) {
    console.log($event.color.hex);
    this.color=$event.color.hex
  }

  create(){
    var color={
      'libelle':this.nom,
      'couleur':this.color
    }
  }

}
