import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchantillonComponent } from '../donnee-technique/echantillon/echantillon.component';
import { RouterModule, Routes } from '@angular/router';
import { DocsComponent } from './docs/docs.component';
import { IndiceMComponent } from './indice-m/indice-m.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MinierComponent } from './minier/minier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'echantillon', component: EchantillonComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'indice', component: IndiceMComponent },
  { path: 'indiceMinier/:id', component : MinierComponent }
  
];

@NgModule({
  declarations: [EchantillonComponent,DocsComponent,IndiceMComponent, MinierComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class PhasePreModule { }
