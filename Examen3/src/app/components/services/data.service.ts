import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor(private httpClient:HttpClient) { }
  
  consulta(state: string) {
    return this.httpClient.get(state);
    }
 
}
 
export class estado{
  clave:string;
  nombre:string;
  poblacion: number;
  femenina:number;
  masculina:number;
  vivienda:number;
}

export class municipio{
  claveEst:string;
  claveMun:string;
  nombre:string;
  poblacion: number;
  femenina:number;
  masculina:number;
  vivienda:number;
}