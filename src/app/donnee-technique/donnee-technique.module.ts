import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipementsComponent } from './equipements/equipements.component';
import { ParametreGeoComponent } from './parametre-geo/parametre-geo.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'ParametreGeologique', component: ParametreGeoComponent },
  { path: 'LesEquipements', component: EquipementsComponent },
  
];

@NgModule({
  declarations: [EquipementsComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class DonneeTechniqueModule { }
