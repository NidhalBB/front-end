import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { CommandeFournisseurComponent } from './commande-fournisseur/commande-fournisseur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemandeAchatComponent } from './demande-achat/demande-achat.component';


const routes: Routes = [
  { path: 'fournisseur', component: FournisseurComponent },
  { path: 'commandeFournisseur', component: CommandeFournisseurComponent },
  { path: 'demandeAchat', component: DemandeAchatComponent },
];

@NgModule({
  declarations: [FournisseurComponent, CommandeFournisseurComponent, DemandeAchatComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule ,
    RouterModule.forChild(routes),
  ]
})
export class AchatModule { }
