import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NetflixComponent } from './netflix/netflix.component';
import { PartedosComponent } from './partedos/partedos.component';
import { PartetresComponent } from './partetres/partetres.component';
import { PerfilniniosComponent } from './perfilninios/perfilninios.component';
import { PartedescargasComponent } from './partedescargas/partedescargas.component';

@NgModule({
  declarations: [
    AppComponent,
    NetflixComponent,
    PartedosComponent,
    PartetresComponent,
    PerfilniniosComponent,
    PartedescargasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
