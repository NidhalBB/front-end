import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { InscrirComponent } from './inscrir/inscrir.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: RegisterComponent },
  { path: 'test', component: InscrirComponent },
]

@NgModule({
  declarations: [LoginComponent, RegisterComponent, InscrirComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserPagesModule { }
