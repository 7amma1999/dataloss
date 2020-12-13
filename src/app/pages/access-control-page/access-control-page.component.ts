import { Component, OnInit, ViewChild } from '@angular/core';
import { DataListService } from '../../shared/services/data-list.service';
import { configuration } from '../../../config/configuration';
import * as _ from 'lodash';

/**
 * This class represents the lazy loaded AdminManagementPageComponent.
 */
@Component({
  selector: 'app-sd-access-control-page',
  templateUrl: 'access-control-page.component.html',
  styleUrls: ['access-control-page.component.scss']
})
export class AccessControlPageComponent implements OnInit {
  dataSummary: any[] = null;
  dataList: any[] = null;
  dataAuditLogs: any[] = null;

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

  clickedAdminIndex = -1;
  isShownTermsConditions = false;

  /**
   * Creates an instance of the AdminManagementPageComponent with the injected
   * DataListService.
   */
  constructor(public dataListService: DataListService) {
  }

  /**
   * OnInit
   */
  ngOnInit() {
    this.dataListService.getAdminSummaryData().subscribe(data => {
      this.dataSummary = data;
    });

    this.dataListService.getAdminListData(null).subscribe(data => {
      this.dataList = data;
    });

    this.dataListService.getAuditLogsAccessControlData(null).subscribe(data => {
      this.dataAuditLogs = data;
    });
  }

  /**
   * click New
   */
  clickNew() {
    this.modalData['name'] = 'modal-windows-create-edit-admin';
    this.modalData['itemData'] = {
      isEdited: false,
      data: {
        photoUrl: '',
        employeeName: '',
        email: '',
        admin: '',
        can: '',
        incidents: '',
        isActive: false,
        status: 'Active',
        agreeTermsAndCondition: false,
        banned: false
      }
    };
  }

  /**
   * click Edit
   * @param event clicked Admin Index
   */
  clickEdit(event) {
    this.clickedAdminIndex = event;

    this.modalData['name'] = 'modal-windows-create-edit-admin';
    this.modalData['itemData'] = {
      isEdited: true,
      data: {...this.dataList[this.clickedAdminIndex],
             agreeTermsAndCondition: true,
             banned: false}
    };
  }

  /**
   * click Create Admin
   */
  clickCreateAdmin() {
    this.modalData['name'] = 'modal-windows-success-info';

    const tempPhotoUrl = this.modalData['itemData']['data']['photoUrl'];
    const tempTitle = this.modalData['itemData']['data']['employeeName'];
    this.modalData['itemData'] = {
      photoUrl: tempPhotoUrl,
      title: tempTitle,
      content: 'New Admin Created'
    };
  }

  /**
   * click Apply Edits
   */
  clickApplyEdits() {
    this.modalData['name'] = 'modal-windows-success-info';

    const tempPhotoUrl = this.modalData['itemData']['data']['photoUrl'];
    const tempTitle = this.modalData['itemData']['data']['employeeName'];
    this.modalData['itemData'] = {
      photoUrl: tempPhotoUrl,
      title: tempTitle,
      content: 'Admin Edited'
    };
  }

  /**
   * show Terms Conditions
   */
  showTermsConditions() {
    this.isShownTermsConditions = true;
  }

  /**
   * click Terms Conditions
   * @param isAgreeed is Agreeed
   */
  clickTermsConditions(isAgreeed) {
    this.modalData['itemData']['data']['agreeTermsAndCondition'] = isAgreeed;
    this.isShownTermsConditions = false;
  }

  /**
   * click Delete Admin
   * @param event clicked Admin Index
   */
  clickDeleteAdmin(event) {
    this.clickedAdminIndex = event;

    this.modalData['name'] = 'modal-windows-confirm';
  }

  /**
   * click Confirm
   */
  clickConfirm() {
  }

  /**
   * change Audit Logs Filter
   * @param filterData filter Data
   */
  changeAuditLogsFilter(filterData) {
    this.dataListService.getAuditLogsAccessControlData(filterData).subscribe(data => {
      this.dataAuditLogs = data;
    });
  }

  /**
   * change Table Paramters
   * @param tableFilterData table Filter Data
   */
  changeTableParamters(tableFilterData) {
    console.log(tableFilterData);
    this.dataListService.getAdminListData(tableFilterData).subscribe(data => {
      this.dataList = data;
    });
  }
}
