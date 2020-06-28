import { Component, OnInit } from '@angular/core';
import { DataService,estado, municipio } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {
  est:string;
  Municipios:municipio[];
  estado:estado= new estado();
  constructor(private data:DataService, private router:ActivatedRoute) { 
  
    this.router.params.subscribe((params) => {
     this.est=params["estado"];
     
    });
    let url =`http://localhost:3000/state/${this.est}`;
    console.log(this.est);

    this.data.consulta(url).subscribe( (Data:any) =>{
  
    
      this.estado.clave= Data.clave;
      this.estado.nombre=Data.nombre;
      this.estado.poblacion=Data.poblacion;
      this.estado.vivienda=Data.viviendas;
      this.estado.femenina=Data.femenina;
      this.estado.masculina=Data.masculina;
      
      let url2=`http://localhost:3000/cities/${this.estado.clave}`;

      this.data.consulta(url2).subscribe((data2:any[]) =>{
      
       data2.forEach(element => {
          let m = new municipio();
          m.claveEst=element.clave_e;
          m.claveMun = element.clave;
          m.nombre = element.nombre;
          m.poblacion= element.poblacion;
          m.vivienda=element.viviendas;
          m.masculina=element.masculina;
          m.femenina=element.femenina;
          this.Municipios.push(m);
        });
      });
    });
   
  }

  ngOnInit(): void {
  }

}
