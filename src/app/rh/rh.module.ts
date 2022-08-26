import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GcollaborateurComponent } from './gcollaborateur/gcollaborateur.component';
import { GpostesComponent } from './gpostes/gpostes.component';
import { GcoordonneComponent } from './gcoordonne/gcoordonne.component';
import { GcompetanceComponent } from './gcompetance/gcompetance.component';



@NgModule({
  declarations: [GcollaborateurComponent, GpostesComponent, GcoordonneComponent, GcompetanceComponent],
  imports: [
    CommonModule
  ]
})
export class RHModule { }
