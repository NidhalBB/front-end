import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GcollaborateurComponent } from './gcollaborateur/gcollaborateur.component';
import { GpostesComponent } from './gpostes/gpostes.component';
import { GcoordonneComponent } from './gcoordonne/gcoordonne.component';
import { GcompetanceComponent } from './gcompetance/gcompetance.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  
  { path: 'Gcollaborateur', component: GcollaborateurComponent },
  { path: 'Gpostes', component: GpostesComponent },
  { path: 'Gcoordonne', component: GcoordonneComponent },
  { path: 'Gcompetance', component: GcompetanceComponent },
];


@NgModule({
  declarations: [GcollaborateurComponent, GpostesComponent, GcoordonneComponent, GcompetanceComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class RHModule { }
