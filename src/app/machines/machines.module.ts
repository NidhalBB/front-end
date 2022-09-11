import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EquipementsComponent } from './equipements/equipements.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FamilleMachineComponent } from './famille-machine/famille-machine.component';


const routes: Routes = [
  
  { path: 'LesEquipements', component: EquipementsComponent },
  { path: 'Famille', component: FamilleMachineComponent },
  
]; 

@NgModule({
  declarations: [EquipementsComponent, FamilleMachineComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class MachinesModule { }
