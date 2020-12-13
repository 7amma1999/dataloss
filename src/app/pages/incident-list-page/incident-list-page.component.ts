import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { DataListService } from '../../shared/services/data-list.service';
import * as _ from 'lodash';

/**
 * This class represents the lazy loaded IncidentListPageComponent.
 */
@Component({
  selector: 'app-sd-incident-list-page',
  templateUrl: 'incident-list-page.component.html',
  styleUrls: ['incident-list-page.component.scss']
})
export class IncidentListPageComponent implements OnInit {
  dataSummary: any[] = null;
  dataList: any[] = null;
  dataAuditLogs: any[] = null;

  reassignIncidentId = -1;
  clickedIncidentIndex = -1;
  userRole = '';

  pageData = {
    pagePerNumber: 10, // row number per page
    pageIndex: 0, // current page index
    totalPage: 20, // total number of pages
    totalRow: 0, // total number of rows
    pagerLinks: [] // array of page links
  };

  modalData = {
    name: '', // ''
    itemData: null
  };

  /**
   * Creates an instance of the IncidentListPageComponent with the injected
   * DataListService.
   */
  constructor(public authService: AuthService,
              public dataListService: DataListService) {
  }

  /**
   * OnInit
   */
  ngOnInit() {
    this.userRole = this.authService.getCurrentUser();

    this.dataListService.getIncidentSummaryData().subscribe(data => {
      this.dataSummary = data;
    });

    this.dataListService.getIncidentListData(null).subscribe(data => {
      this.dataList = data;
    });

    this.dataListService.getAuditLogsIncidentData(null).subscribe(data => {
      this.dataAuditLogs = data;
    });
  }

  /**
   * click Delete Incident
   * @param event clicked Incident Index
   */
  clickDeleteIncident(event) {
    this.clickedIncidentIndex = event;

    this.modalData['name'] = 'modal-windows-confirm';
  }

  /**
   * clickConfirm
   */
  clickConfirm() {
  }

  /**
   * change Audit Logs Filter
   * @param filterData filter Data
   */
  changeAuditLogsFilter(filterData) {
    this.dataListService.getAuditLogsIncidentData(filterData).subscribe(data => {
      this.dataAuditLogs = data;
    });
  }

  /**
   * click Remind
   * @param event reminder data
   */
  clickRemind(event) {
    this.modalData['name'] = 'modal-windows-reminder-sent';
    this.modalData['itemData'] = event;
  }

  /**
   * click Reassign
   * @param event reassign Incident Id
   */
  clickReassign(event) {
    this.reassignIncidentId = event;
    this.modalData['name'] = 'modal-windows-reassign-incident';
    this.modalData['itemData'] = _.cloneDeep(this.dataList[this.reassignIncidentId]);
  }

  /**
   * click Finish Reassignment
   */
  clickFinishReassignment() {
    this.modalData['name'] = 'modal-windows-success-info';
    this.modalData['itemData'] = {
      photoUrl: this.modalData['itemData']['employeeParticulars']['photoUrl'],
      title: 'Incident ' + this.dataList[this.reassignIncidentId]['incidentId'],
      content: 'Reassigned to ' + this.modalData['itemData']['employeeParticulars']['name']
    };
  }

  /**
   * change Table Paramters
   * @param tableFilterData table Filter Data
   */
  changeTableParamters(tableFilterData) {
    console.log(tableFilterData);
    this.dataListService.getIncidentListData(tableFilterData).subscribe(data => {
      this.dataList = data;
    });
  }
}
