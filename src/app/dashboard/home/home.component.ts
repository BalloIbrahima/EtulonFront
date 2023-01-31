import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from 'src/app/Service/admin/admin.service';
import { CitoyenService } from 'src/app/Service/citoyen/citoyen.service';
import { JeuService } from 'src/app/Service/jeu/jeu.service';
import { Chart, ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective, ThemeService } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{

  nbreCitoyen:any=0
  nbreAdmin:any=0
  nbreJeu:any=0

  ///graphe variable
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  barChartType: ChartType = 'bar';
  MesMois=[ 'Jan', 'Fev', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou','Sep','Oct','Nov','Dec' ]
  moi=[];
  cotis=[]

  constructor(private adminService:AdminService, private citoyenService:CitoyenService, private jeuService:JeuService){}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    //recuperation de nombre d'admin
    this.adminService.nombreAdmin().subscribe(res=>{
      this.nbreAdmin=res.data
    })

    //recuperation de nombre de citoyen
    this.citoyenService.nombreCitoyen().subscribe(res=>{
      this.nbreCitoyen=res.data
    })

    //recuperation du nombre de jeu
    this.jeuService.nombrejeu().subscribe(res=>{
      this.nbreJeu=res.data
    })
  }










  //fuction for charts
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {

    labels: this.moi,
    datasets: [
      { data: this.cotis, label: 'Cotisations' },
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    //console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    //console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }
  //end function

}
