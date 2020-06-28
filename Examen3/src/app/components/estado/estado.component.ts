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
  municipios:municipio[];
  estado:estado;
  constructor(private data:DataService, private router:ActivatedRoute) { 
  
    this.router.params.subscribe((params) => {
     this.est=params["estado"];
     
    });
    let url =`http://localhost:3000/state/${this.est}`;
    console.log(this.est);

    this.data.consulta(url).subscribe( (Data:any) =>{
      console.log(Data);
      this.estado.clave= Data.clave;
    
    });
  
  }

  ngOnInit(): void {
  }

}
