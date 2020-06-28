import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficaComponent } from './components/grafica/grafica.component';
import { NavComponent } from './components/nav/nav.component';
import { EstadoComponent } from './components/estado/estado.component';

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './components/services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    GraficaComponent,
    NavComponent,
    EstadoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
