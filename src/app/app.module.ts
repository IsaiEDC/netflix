import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NetflixComponent } from './netflix/netflix.component';
import { PartedosComponent } from './partedos/partedos.component';
import { PartetresComponent } from './partetres/partetres.component';
import { PerfilniniosComponent } from './perfilninios/perfilninios.component';
import { PartedescargasComponent } from './partedescargas/partedescargas.component';
import { PfComponent } from './pf/pf.component';
import { FooterComponent } from './footer/footer.component';
import { LinkextrasComponent } from './linkextras/linkextras.component';
import { PalomitasComponent } from './palomitas/palomitas.component';
import { HeaderComponent } from './header/header.component';
import { PreguntasfrecuentesComponent } from './preguntasfrecuentes/preguntasfrecuentes.component';

@NgModule({
  declarations: [
    AppComponent,
    NetflixComponent,
    PartedosComponent,
    PartetresComponent,
    PerfilniniosComponent,
    PartedescargasComponent,
    PfComponent,
    FooterComponent,
    LinkextrasComponent,
    PalomitasComponent,
    HeaderComponent,
    PreguntasfrecuentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
