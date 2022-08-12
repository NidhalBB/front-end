import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaboComponent } from './labo/labo.component';
import { MagasinsComponent } from './magasins/magasins.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatiereacquiseComponent } from './produit/matiereacquise/matiereacquise.component';
import { ProduitSemifiniComponent } from './produit/produit-semifini/produit-semifini.component';
import { ProduitfiniComponent } from './produit/produitfini/produitfini.component';
import { FamilleProduitComponent } from './produit/famille-produit/famille-produit.component';
import { SousFamilleComponent } from './produit/sous-famille/sous-famille.component';


const routes: Routes = [
  { path: 'labo', component: LaboComponent },
  { path: 'magasins', component: MagasinsComponent },
  { path: 'matiereacquise', component: MatiereacquiseComponent },
  { path: 'ProduitSemifini', component: ProduitSemifiniComponent },
  { path: 'Produitfini', component: ProduitfiniComponent },
  { path: 'FamilleProduit', component: FamilleProduitComponent },
  { path: 'SousFamille', component: SousFamilleComponent },
];

@NgModule({
  declarations: [LaboComponent, MagasinsComponent, MatiereacquiseComponent, ProduitSemifiniComponent, ProduitfiniComponent, FamilleProduitComponent, SousFamilleComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class GestionModule { }
