import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficaComponent } from './components/grafica/grafica.component';
import { NavComponent } from './components/nav/nav.component';
import { EstadoComponent } from './components/estado/estado.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficaComponent,
    NavComponent,
    EstadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
