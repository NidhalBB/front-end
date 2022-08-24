import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParametreGeoComponent } from './parametre-geo/parametre-geo.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EchantillonComponent } from './echantillon/echantillon.component';
import { DocsComponent } from './docs/docs.component';
import { MinierComponent } from './minier/minier.component';
import { EchantillonageVarcComponent } from './echantillonage-varc/echantillonage-varc.component';
import { PhysoChimiqueComponent } from './physo-chimique/physo-chimique.component';
import { PermisExplorationComponent } from './permis-exploration/permis-exploration.component';


const routes: Routes = [
  { path: 'ParametreGeologique', component: ParametreGeoComponent },
  { path: 'echantillonenVrac', component: EchantillonageVarcComponent },
  { path: 'physico-chimique', component: PhysoChimiqueComponent },
  { path: 'permisexpo', component: PermisExplorationComponent },
  { path: 'echantillon', component: EchantillonComponent },
   { path: 'docs', component: DocsComponent },
  { path: 'echantillon/:id', component : MinierComponent }
  
];

@NgModule({
  declarations: [EchantillonComponent, DocsComponent, EchantillonageVarcComponent, PhysoChimiqueComponent, PermisExplorationComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule ,
    RouterModule.forChild(routes),
  ]
})
export class DonneeTechniqueModule { }
