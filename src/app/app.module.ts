import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NetflixComponent } from './netflix/netflix.component';
import { PartedosComponent } from './partedos/partedos.component';

@NgModule({
  declarations: [
    AppComponent,
    NetflixComponent,
    PartedosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
