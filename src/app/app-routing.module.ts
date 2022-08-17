import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'Explorationminérale', loadChildren: () => import('./donnee-technique/donnee-technique.module').then(m => m.DonneeTechniqueModule) },
  { path: 'gestion', loadChildren: () => import('./gestion/gestion.module').then(m => m.GestionModule) },
  { path: 'commercial', loadChildren: () => import('./commercial/commercial.module').then(m => m.CommercialModule) },

 { path: 'achat', loadChildren: () => import('./achat/achat.module').then(m => m.AchatModule) },

  { path: 'Phase-Preliminaire', loadChildren: () => import('./phase-pre/phase-pre.module').then(m => m.PhasePreModule) },
  { path: 'EssaiPilote', loadChildren: () => import('./essai-pilote/essai-pilote.module').then(m => m.EssaiPiloteModule) },
  { path: 'EtudeMarche', loadChildren: () => import('./etude-marche/etude-marche.module').then(m => m.EtudeMarcheModule) },
  { path: 'basic-ui', loadChildren: () => import('./basic-ui/basic-ui.module').then(m => m.BasicUiModule) },
  { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsDemoModule) },
  { path: 'forms', loadChildren: () => import('./forms/form.module').then(m => m.FormModule) },
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
  { path: 'general-pages', loadChildren: () => import('./general-pages/general-pages.module').then(m => m.GeneralPagesModule) },
  { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
  { path: 'user-pages', loadChildren: () => import('./user-pages/user-pages.module').then(m => m.UserPagesModule) },
  { path: 'error-pages', loadChildren: () => import('./error-pages/error-pages.module').then(m => m.ErrorPagesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
