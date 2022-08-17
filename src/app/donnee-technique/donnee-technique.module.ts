import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipementsComponent } from './equipements/equipements.component';
import { ParametreGeoComponent } from './parametre-geo/parametre-geo.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProspectionComponent } from './prospection/prospection.component';
import { ExplorationComponent } from './exploration/exploration.component';
import { EchantillonComponent } from './echantillon/echantillon.component';
import { DocsComponent } from './docs/docs.component';


const routes: Routes = [
  { path: 'ParametreGeologique', component: ParametreGeoComponent },
  { path: 'LesEquipements', component: EquipementsComponent },
  { path: 'echantillon', component: EchantillonComponent },
   { path: 'docs', component: DocsComponent },
  { path: 'echantillon/:id', component : EchantillonComponent }
  
];

@NgModule({
  declarations: [EquipementsComponent, ProspectionComponent, ExplorationComponent,EchantillonComponent, DocsComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule ,
    RouterModule.forChild(routes),
  ]
})
export class DonneeTechniqueModule { }
