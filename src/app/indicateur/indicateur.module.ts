import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecuriteComponent } from './securite/securite.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { TemporaireComponent } from './temporaire/temporaire.component';
import { SpatialComponent } from './spatial/spatial.component';
import { CphysiquesComponent } from './cphysiques/cphysiques.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: 'Securite', component: SecuriteComponent },
  { path: 'Maintenance', component: MaintenanceComponent },
  { path: 'Temporaire', component: TemporaireComponent },
  { path: 'Spatial', component: SpatialComponent },
  { path: 'Cphysiques', component: CphysiquesComponent },
];

@NgModule({
  declarations: [SecuriteComponent, MaintenanceComponent, TemporaireComponent, SpatialComponent, CphysiquesComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule ,
    RouterModule.forChild(routes),
  ]
})
export class IndicateurModule { }
