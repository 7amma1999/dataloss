import { Component, Input, EventEmitter, Output } from '@angular/core';

/**
 * This class represents the lazy loaded PaginationComponent.
 */
@Component({
  selector: 'app-sd-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['pagination.component.scss']
})
export class PaginationComponent {
  @Input() pageData = {
    pagePerNumber: 10, // row number per page
    pageIndex: 0, // current page index
    totalPage: 0, // total number of pages
    totalRow: 0, // total number of rows
    pagerLinks: [] // array of page links
  };

  @Output() changePageIndex: EventEmitter<string> = new EventEmitter();

  /**
   * click Prev arrow
   */
  clickPrev() {
    this.pageData.pageIndex--;
    this.changePageIndex.emit();
  }

  /**
   * click Page Number Link
   * @param index clicked page index
   */
  clickPageLink(index) {
    this.pageData.pageIndex = index;
    this.changePageIndex.emit();
  }

  /**
   * click Next arrow
   */
  clickNext() {
    this.pageData.pageIndex++;
    this.changePageIndex.emit();
  }

  /**
   * currentPages
   */
  currentPages() {
    const pagesArray = [];

    if (this.pageData.pageIndex < 9) {
      for (let i = 0; i < (9 > this.pageData.totalPage ? this.pageData.totalPage : 9); i++) {
        pagesArray.push(i);
      }
    } else if ((this.pageData.totalPage - this.pageData.pageIndex) < 10) {
      for (let i = this.pageData.totalPage - 1; i > (this.pageData.totalPage - 10); i--) {
        pagesArray.unshift(i);
      }
    } else {
      for (let i = this.pageData.pageIndex; i > (this.pageData.pageIndex - 9); i--) {
        pagesArray.unshift(i);
      }
    }

    return pagesArray;
  }
}
