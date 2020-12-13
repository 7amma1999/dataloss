import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * This class represents the lazy loaded TableCommonComponent.
 */
@Component({
  selector: 'app-sd-table-common',
  templateUrl: 'table-common.component.html',
  styleUrls: ['table-common.component.scss']
})
export class TableCommonComponent {
  @Input() tableType = ''; // 'admin-list', 'audit-logs', 'audit-logs-list', 'incident-list'
  @Input() userRole = '';
  @Input() dataList: any[] = [];
  @Input() selectedIndex = 0;

  @Input() pageData = {
    pagePerNumber: 10, // row number per page
    pageIndex: 0, // current page index
    totalPage: 0, // total number of pages
    totalRow: 0, // total number of rows
    pagerLinks: [] // array of page links
  };

  @Output() clickNew: EventEmitter<any> = new EventEmitter();
  @Output() clickEdit: EventEmitter<number> = new EventEmitter();
  @Output() clickDeleteAdmin: EventEmitter<number> = new EventEmitter();
  @Output() clickDeleteIncident: EventEmitter<number> = new EventEmitter();
  @Output() selectLog: EventEmitter<number> = new EventEmitter();
  @Output() clickRemind: EventEmitter<string> = new EventEmitter();
  @Output() clickReassign: EventEmitter<string> = new EventEmitter();

  @Output() changeTableParamters: EventEmitter<any> = new EventEmitter();

  searchText = '';
  sortData = {
    sortColumn: '',
    sortOrder: ''// 'asc', 'desc'
  };
  filterData: any;

  /**
   * Creates an instance of the TableCommonComponent
   */
  constructor(private router: Router,
              private domSanitizer: DomSanitizer) {}

  /**
   * call Back Table Paramters
   */
  callBackTableParamters() {
    const tableParams = {
      searchText: this.searchText,
      sortData: this.sortData,
      pageData: this.pageData,
      filterData: this.filterData
    };

    this.changeTableParamters.emit(tableParams);
  }

  /**
   * chang Search
   * @param event search text
   */
  changSearch(event) {
    this.searchText = event;
    this.callBackTableParamters();
  }
  toNewIncident(){
    this.router.navigate(['new-incident-page']);
  }
  /**
   * chang Pagination
   */
  changePageIndex() {
    this.callBackTableParamters();
  }

  /**
   * click Sort on tables
   * @param column Name clicked column name
   */
  clickSort(columnName) {
    if (this.sortData.sortColumn !== columnName) {
      // click un-sorted column
      this.sortData.sortColumn = columnName;
      this.sortData.sortOrder = 'asc';
    } else {
      // click sorted column
      if (this.sortData.sortOrder === 'asc') {
        this.sortData.sortOrder = 'desc';
      } else {
        this.sortData.sortOrder = 'asc';
      }
    }

    this.callBackTableParamters();
  }

  /**
   * change Audit Logs Filter
   * @param event filter Data
   */
  changeAuditLogsFilter(event) {
    this.filterData = event;

    this.callBackTableParamters();
  }

  /**
   * get Content Trusted
   * @param content converted content
   * @return trusted content
   */
  getContentTrusted(content) {
    return this.domSanitizer.bypassSecurityTrustHtml(content);
  }
}
