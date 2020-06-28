import { Component, OnInit } from '@angular/core';
import { DataService, estado, municipio } from '../services/data.service';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css'],
})
export class EstadoComponent implements OnInit {

  est: string;
  Municipios: municipio[];
  bandera:boolean;
  estado: estado = new estado();
  private chart: any = null;
  private label: string[] = ['Mujeres', 'Hombres'];
  private dat: number[] = [];

  constructor(private data: DataService) {
    this.bandera=true;
  }

  Buscar(estado:string) {
    this.est=estado;
    this.bandera=false;
    let url = `http://localhost:3000/state/${this.est}`;
    console.log(this.est);

    this.data.consulta(url).subscribe((Data: any) => {
      this.estado.clave = Data.clave;
      this.estado.nombre = Data.nombre;
      this.estado.poblacion = Data.poblacion;
      this.estado.vivienda = Data.viviendas;
      this.estado.femenina = Data.femenina;
      this.estado.masculina = Data.masculina;
      this.dat[0] = Data.femenina;
      this.dat[1] = Data.masculina;

      //grafica
      this.chart = new Chart('my chart', {
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
              borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
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
      let url2 = `http://localhost:3000/cities/${this.estado.clave}`;

      this.data.consulta(url2).subscribe((data2: any[]) => {
        this.Municipios = [];
        data2.forEach((element) => {
          let m = new municipio();
          m.claveEst = element.clave_e;
          m.claveMun = element.clave;
          m.nombre = element.nombre;
          m.poblacion = element.poblacion;
          m.vivienda = element.viviendas;
          m.masculina = element.masculina;
          m.femenina = element.femenina;
          this.Municipios.push(m);
        });
      });
    });
  }

  ngOnInit(): void {}
}
