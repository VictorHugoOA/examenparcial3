import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EstadoComponent } from './components/estado/estado.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './components/services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    EstadoComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
