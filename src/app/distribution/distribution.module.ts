import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonLivraisonComponent } from './bon-livraison/bon-livraison.component';
import { FactureComponent } from './facture/facture.component';
import { BonReceptionComponent } from './bon-reception/bon-reception.component';
import { CommandeClientComponent } from './commande-client/commande-client.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  
  { path: 'BonLivraison', component: BonLivraisonComponent },
  { path: 'Facture', component: FactureComponent },
  { path: 'BonReception', component: BonReceptionComponent },
  { path: 'CommandeClient', component: CommandeClientComponent },
];

@NgModule({
  declarations: [BonLivraisonComponent, FactureComponent, BonReceptionComponent, CommandeClientComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class DistributionModule { }
