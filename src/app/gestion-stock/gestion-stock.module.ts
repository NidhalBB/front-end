import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseProduitComponent } from './base-produit/base-produit.component';
import { JournalComponent } from './journal/journal.component';
import { EtatStockComponent } from './etat-stock/etat-stock.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  { path: 'BaseProduit', component: BaseProduitComponent },
  { path: 'Journal', component: JournalComponent },
  { path: 'EtatStock', component: EtatStockComponent },
];

@NgModule({
  declarations: [BaseProduitComponent, JournalComponent, EtatStockComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule ,
    RouterModule.forChild(routes), 
  ]
})
export class GestionStockModule { }
