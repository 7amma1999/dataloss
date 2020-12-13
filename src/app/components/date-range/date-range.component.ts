import { Component, Input, EventEmitter, Output } from '@angular/core';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

/**
 * This class represents the lazy loaded DateRangeComponent.
 */
@Component({
  selector: 'app-sd-date-range',
  templateUrl: 'date-range.component.html',
  styleUrls: ['date-range.component.scss']
})
export class DateRangeComponent {
  @Input() dataList: any[];
  @Input() shownValue: string;
  @Output() changeDate: EventEmitter<any> = new EventEmitter();

  showDate = false;
  hasSubmitted = false;

  hoveredDate: NgbDate;

  fromDate: NgbDate;
  toDate: NgbDate;

  constructor(public calendar: NgbCalendar) {
    this.fromDate = this.calendar.getToday();
    this.toDate = this.calendar.getNext(calendar.getToday(), 'd', 7);
  }

  /**
   * click Clear
   */
  clickClear() {
    this.fromDate = this.calendar.getToday();
    this.toDate = this.calendar.getToday();
    this.hasSubmitted = false;
  }

  /**
   * click Save
   */
  clickSave() {
    this.hasSubmitted = true;
    this.shownValue = `${this.convertMonthText(this.fromDate.month)} ${this.fromDate.day} - \
${this.convertMonthText(this.toDate.month)} ${this.toDate.day}`;

    this.changeDate.emit(this.shownValue);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

  /**
   * convert month text
   * @param month number of month value
   */
  convertMonthText(month) {
    let monthText = '';
    switch (month) {
      case 1:
        monthText = 'Jan';
        break;
      case 2:
        monthText = 'Feb';
        break;
      case 3:
        monthText = 'Mar';
        break;
      case 4:
        monthText = 'Apr';
        break;
      case 5:
        monthText = 'May';
        break;
      case 6:
        monthText = 'Jun';
        break;
      case 7:
        monthText = 'Jul';
        break;
      case 8:
        monthText = 'Aug';
        break;
      case 9:
        monthText = 'Sep';
        break;
      case 10:
        monthText = 'Oct';
        break;
      case 11:
        monthText = 'Nov';
        break;
      case 12:
        monthText = 'Dec';
        break;
    }
    return monthText;
  }
}
