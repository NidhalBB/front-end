import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error-pages/error404/error404.component';
import { LoginComponent } from './user-pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Explorationminérale', loadChildren: () => import('./donnee-technique/donnee-technique.module').then(m => m.DonneeTechniqueModule) },
  { path: 'gestion', loadChildren: () => import('./gestion/gestion.module').then(m => m.GestionModule) },
  { path: 'commercial', loadChildren: () => import('./commercial/commercial.module').then(m => m.CommercialModule) },
  { path: 'GestionStock', loadChildren: () => import('./gestion-stock/gestion-stock.module').then(m => m.GestionStockModule) },
 { path: 'achat', loadChildren: () => import('./achat/achat.module').then(m => m.AchatModule) },
 { path: 'Imo', loadChildren: () => import('./gestion-imo/gestion-imo.module').then(m => m.GestionImoModule) },
 { path: 'machines', loadChildren: () => import('./machines/machines.module').then(m => m.MachinesModule) },
 { path: 'extraction', loadChildren: () => import('./extraction/extraction.module').then(m => m.ExtractionModule) },
 { path: 'production', loadChildren: () => import('./prod/prod.module').then(m => m.ProdModule) },
 { path: 'Logistique', loadChildren: () => import('./logistique/logistique.module').then(m => m.LogistiqueModule) },
 { path: 'indicateur', loadChildren: () => import('./indicateur/indicateur.module').then(m => m.IndicateurModule) },
 
  
 { path: 'Gestionpersonnelles', loadChildren: () => import('./rh/rh.module').then(m => m.RHModule) }, 
 { path: 'distribution', loadChildren: () => import('./distribution/distribution.module').then(m => m.DistributionModule) },  
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
