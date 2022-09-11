import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MvtComponent } from './mvt/mvt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: 'Mouvement', component: MvtComponent },
];

@NgModule({
  declarations: [MvtComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule ,
    RouterModule.forChild(routes),
  ]
})
export class LogistiqueModule { }
