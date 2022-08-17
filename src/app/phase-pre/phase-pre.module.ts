import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndiceMComponent } from './indice-m/indice-m.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MinierComponent } from './minier/minier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  
  { path: 'indice', component: IndiceMComponent },
  { path: 'indiceMinier/:id', component : MinierComponent }
  
];

@NgModule({
  declarations: [IndiceMComponent,MinierComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class PhasePreModule { }
