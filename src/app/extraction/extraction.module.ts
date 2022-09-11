import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuantiteComponent } from './quantite/quantite.component';
import { DonneesExtractionComponent } from './donnees-extraction/donnees-extraction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  { path: 'Quantite', component: QuantiteComponent },
  { path: 'DonneesExtraction', component: DonneesExtractionComponent },
];

@NgModule({
  declarations: [QuantiteComponent, DonneesExtractionComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule ,
    RouterModule.forChild(routes),
  ]
})
export class ExtractionModule { }
