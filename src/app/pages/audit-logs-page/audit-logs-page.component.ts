import { Component, OnInit, ViewChild } from '@angular/core';
import { DataListService } from '../../shared/services/data-list.service';
import * as _ from 'lodash';

/**
 * This class represents the lazy loaded AuditLogsPageComponent.
 */
@Component({
  selector: 'app-sd-audit-logs-page',
  templateUrl: 'audit-logs-page.component.html',
  styleUrls: ['audit-logs-page.component.scss']
})
export class AuditLogsPageComponent implements OnInit {
  dataAuditLogsAccessControl: any[] = null;
  dataAuditLogsIncident: any[] = null;

  dataList: any[] = null;
  selectedIndex = 0;
  showDetailsMobile = false;

  pageData = {
    pagePerNumber: 10, // row number per page
    pageIndex: 0, // current page index
    totalPage: 20, // total number of pages
    totalRow: 0, // total number of rows
    pagerLinks: [] // array of page links
  };

  /**
   * Creates an instance of the AuditLogsPageComponent with the injected
   * DataListService.
   */
  constructor(public dataListService: DataListService) {
  }

  /**
   * OnInit
   */
  ngOnInit() {
    this.dataListService.getAuditLogsAccessControlData(null).subscribe(accessControlData => {
      this.dataAuditLogsAccessControl = accessControlData;
      this.dataListService.getAuditLogsIncidentData(null).subscribe(incidentData => {
        this.dataAuditLogsIncident = incidentData;
        this.dataList = [...this.dataAuditLogsAccessControl,
                         ...this.dataAuditLogsIncident].splice(0, 7);
      });
    });
  }

  /**
   * selectLog
   * @param event selected Index
   */
  selectLog(event) {
    this.selectedIndex = event;
    this.showDetailsMobile = true;
  }

  /**
   * change Table Paramters
   * @param tableFilterData table Filter Data
   */
  changeTableParamters(tableFilterData) {
    console.log(tableFilterData);
    this.dataListService.getAuditLogsAccessControlData(tableFilterData).subscribe(accessControlData => {
      this.dataAuditLogsAccessControl = accessControlData;
      this.dataListService.getAuditLogsIncidentData(tableFilterData).subscribe(incidentData => {
        this.dataAuditLogsIncident = incidentData;
        this.dataList = [...this.dataAuditLogsAccessControl,
                         ...this.dataAuditLogsIncident].splice(0, 7);
      });
    });
  }
}
