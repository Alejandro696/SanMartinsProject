import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { MaximasComponent } from './maximas/maximas.component';
import { VidaFamiliarComponent } from './vida-familiar/vida-familiar.component';
import { CordilleraAndesComponent } from './cordillera-andes/cordillera-andes.component';
import { CampanaLibertadoraComponent } from './campana-libertadora/campana-libertadora.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const rutas: Routes = [
  {path:'',component:VidaFamiliarComponent},
  {path:'Maximas',component:MaximasComponent},
  {path:'Vida-Familiar',component:VidaFamiliarComponent},
  {path:'Cordillera-de-los-Andes',component:CordilleraAndesComponent},
  {path:'Campaña-Libertadora',component:CampanaLibertadoraComponent},
  {path:'**',component:PageNotFoundComponent},
  
];

@NgModule({
  imports:[RouterModule.forRoot(rutas)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
