import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VidaFamiliarComponent } from './vida-familiar/vida-familiar.component';
import { CordilleraAndesComponent } from './cordillera-andes/cordillera-andes.component';
import { MaximasComponent } from './maximas/maximas.component';
import { CampanaLibertadoraComponent } from './campana-libertadora/campana-libertadora.component';

import { AppRoutingModule } from './/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    VidaFamiliarComponent,
    CordilleraAndesComponent,
    MaximasComponent,
    CampanaLibertadoraComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
