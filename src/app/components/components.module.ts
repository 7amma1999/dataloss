import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { ClickOutsideModule } from 'ng-click-outside';

// bootstrap module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// reusable components
import { HeaderComponent } from './header/header.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { AdminStatusSummaryComponent } from './admin-status-summary/admin-status-summary.component';
import { ViaRegionComponent } from './via-region/via-region.component';
import { TotalDLPAdminsComponent } from './total-dlp-admins/total-dlp-admins.component';
import { AuditLogsListComponent } from './audit-logs-list/audit-logs-list.component';
import { AuditLogDetailsComponent } from './audit-log-details/audit-log-details.component';
import { StatusGraphComponent } from './status-graph/status-graph.component';
import { TableHeaderComponent } from './table-header/table-header.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { DateRangeComponent } from './date-range/date-range.component';
import { TableCommonComponent } from './table-common/table-common.component';
import { PaginationComponent } from './pagination/pagination.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { CircleChartComponent } from './circle-chart/circle-chart.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { ModalWindowsCreateEditAdminComponent } from './modal-windows-create-edit-admin/modal-windows-create-edit-admin.component';
import { ModalWindowsTermsConditionsComponent } from './modal-windows-terms-conditions/modal-windows-terms-conditions.component';
import { ModalWindowsReassignIncidentComponent } from './modal-windows-reassign-incident/modal-windows-reassign-incident.component';
import { ModalWindowsReminderSentComponent } from './modal-windows-reminder-sent/modal-windows-reminder-sent.component';
import { ModalWindowsSuccessInfoComponent } from './modal-windows-success-info/modal-windows-success-info.component';
import { ModalWindowsConfirmComponent } from './modal-windows-confirm/modal-windows-confirm.component';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
const components = [
  HeaderComponent,
  TopBannerComponent,
  AdminStatusSummaryComponent,
  ViaRegionComponent,
  TotalDLPAdminsComponent,
  AuditLogsListComponent,
  AuditLogDetailsComponent,
  StatusGraphComponent,
  TableHeaderComponent,
  TableFilterComponent,
  DateRangeComponent,
  TableCommonComponent,
  PaginationComponent,
  RadarChartComponent,
  LineChartComponent,
  CircleChartComponent,
  UserSelectionComponent,
  ModalWindowsCreateEditAdminComponent,
  ModalWindowsTermsConditionsComponent,
  ModalWindowsReassignIncidentComponent,
  ModalWindowsReminderSentComponent,
  ModalWindowsSuccessInfoComponent,
  ModalWindowsConfirmComponent,
];

@NgModule({
  imports: [
             BrowserModule, CommonModule, FormsModule, ReactiveFormsModule,
             RouterModule, ChartsModule, ClickOutsideModule, NgbModule
           ],
  declarations: [...components],
  exports: [...components]
})
export class ComponentsModule {}
