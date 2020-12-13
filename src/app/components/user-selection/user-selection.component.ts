import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DataListService } from '../../shared/services/data-list.service';

/**
 * This class represents the lazy loaded UserSelectionComponent.
 */
@Component({
  selector: 'app-sd-user-selection',
  templateUrl: 'user-selection.component.html',
  styleUrls: ['user-selection.component.scss']
})
export class UserSelectionComponent implements OnInit {
  @Input() dataUser: any[];
  @Input() userClickable: boolean;
  @Input() inputPlaceholder = '';
  @Input() showEmail: boolean;
  @Output() selectUser: EventEmitter<any> = new EventEmitter();

  dataListUser: any[] = null;
  searchText = '';

  /**
   * Creates an instance of the UserSelectionComponent with the injected
   * DataListService.
   */
  constructor(public dataListService: DataListService) {
  }

  /**
   * OnInit
   */
  ngOnInit() {
    this.dataListService.getUserListData().subscribe(data => {
      this.dataListUser = data;
    });
  }

  /**
   * click Default User
   */
  clickDefaultUser() {
    if (this.userClickable) {
      this.dataUser['photoUrl'] = '';
      this.dataUser['name'] = '';
      this.dataUser['email'] = '';

      this.selectUser.emit(this.dataUser);
    }
  }

  /**
   * click User
   * @param item user item
   */
  clickUser(item) {
    this.selectUser.emit(item);
    this.searchText = '';
  }

  /**
   * matched Search
   * @param item matched item
   */
  matchedSearch(item) {
    const itemIndex = item['name'].toLowerCase().indexOf(this.searchText.toLowerCase());

    item['firstLabelValue'] = item['name'].slice(0, itemIndex);
    item['middleLabelValue'] = item['name'].slice(itemIndex, this.searchText.length + itemIndex);
    item['lastLabelValue'] = item['name'].slice(this.searchText.length + itemIndex);
    return itemIndex > -1 ? true : false;
  }

  /**
   * has Matched Users
   */
  hasMatchedUsers() {
    if (this.searchText.trim() !== '') {
      let count = 0;
      this.dataListUser.forEach((item, index) => {
        if (item['name'].toLowerCase().indexOf(this.searchText.toLowerCase()) > -1) {
          count++;
        }
      });

      return count ? true : false;
    } else {
      return false;
    }
  }
}
