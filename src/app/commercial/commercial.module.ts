import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { CommandeClientComponent } from './commande-client/commande-client.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: 'client', component: ClientComponent },
  { path: 'commandeClient', component: CommandeClientComponent },
];


@NgModule({
  declarations: [ClientComponent,CommandeClientComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule ,
    RouterModule.forChild(routes),
  ]
})
export class CommercialModule { }
