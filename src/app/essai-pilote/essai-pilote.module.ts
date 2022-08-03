import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultatComponent } from './resultat/resultat.component';
import { EquipementUtiliseeComponent } from './equipement-utilisee/equipement-utilisee.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  { path: 'equipementUtilise', component: EquipementUtiliseeComponent },
  { path: 'resultat', component: ResultatComponent },
  
];
@NgModule({
  declarations: [ResultatComponent, EquipementUtiliseeComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class EssaiPiloteModule { }
