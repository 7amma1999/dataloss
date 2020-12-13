import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPageComponent } from './pages/index-page/index-page.component';
import { AccessControlPageComponent } from './pages/access-control-page/access-control-page.component';
import { AuditLogsPageComponent } from './pages/audit-logs-page/audit-logs-page.component';
import { IncidentListPageComponent } from './pages/incident-list-page/incident-list-page.component';
import { NewIncidentPageComponent } from './pages/new-incident-page/new-incident-page.component';

const routes: Routes = [
  { path: 'index-page', component: IndexPageComponent },
  { path: 'access-control-page', component: AccessControlPageComponent },
  { path: 'audit-logs-page', component: AuditLogsPageComponent },
  { path: 'incident-list-page', component: IncidentListPageComponent },
  {path: 'new-incident-page', component:NewIncidentPageComponent},
  { path: '**', redirectTo: 'index-page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
