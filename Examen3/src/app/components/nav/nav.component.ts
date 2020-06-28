import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
estado:string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Buscar(estado:string){
    this.estado=estado;
    (<HTMLInputElement>document.getElementById("b")).value="";
    this.router.navigate(['/Estado', this.estado]);
  }
}
