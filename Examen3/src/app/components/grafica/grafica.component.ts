import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  private chart: any = null;
  private label:string[]= ['Mujeres', 'Hombres'];
  private dat:number[]=[12000, 19000];
  constructor() {}

  ngOnInit(): void {

    this.chart = new Chart("my chart", {
      type: 'bar',
      data: {
        labels: this.label,
        datasets: [
          {
            label: 'Población por sexo',
            data: this.dat,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
           
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive:true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
}
