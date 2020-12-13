import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// app main component
import { AppComponent } from './app.component';

// routing module
import { AppRoutingModule } from './app-routing.module';

// bootstrap module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// pages
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { AccessControlPageComponent } from './pages/access-control-page/access-control-page.component';
import { AuditLogsPageComponent } from './pages/audit-logs-page/audit-logs-page.component';
import { IncidentListPageComponent } from './pages/incident-list-page/incident-list-page.component';

// reusable components
import { ComponentsModule } from './components/components.module';

import { AuthService } from './shared/services/auth.service';
import { DataListService } from './shared/services/data-list.service';
import { NewIncidentPageComponent } from './pages/new-incident-page/new-incident-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    AccessControlPageComponent,
    AuditLogsPageComponent,
    IncidentListPageComponent,
    NewIncidentPageComponent,
  ],
  imports: [
            BrowserModule,
            FormsModule,
            HttpClientModule,
            NgbModule,
            ComponentsModule,
            AppRoutingModule,
           ],
  providers: [AuthService, DataListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
