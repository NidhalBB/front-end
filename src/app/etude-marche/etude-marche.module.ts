import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreuvesComponent } from './preuves/preuves.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  { path: 'LesPruves', component: PreuvesComponent }
  
];
@NgModule({
  declarations: [PreuvesComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class EtudeMarcheModule { }
