import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParametreGeoComponent } from './parametre-geo/parametre-geo.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProspectionComponent } from './prospection/prospection.component';
import { ExplorationComponent } from './exploration/exploration.component';
import { EchantillonComponent } from './echantillon/echantillon.component';
import { DocsComponent } from './docs/docs.component';
import { MinierComponent } from './minier/minier.component';


const routes: Routes = [
  { path: 'ParametreGeologique', component: ParametreGeoComponent },
  
  { path: 'echantillon', component: EchantillonComponent },
   { path: 'docs', component: DocsComponent },
  { path: 'echantillon/:id', component : MinierComponent }
  
];

@NgModule({
  declarations: [ProspectionComponent, ExplorationComponent,EchantillonComponent, DocsComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule ,
    RouterModule.forChild(routes),
  ]
})
export class DonneeTechniqueModule { }
