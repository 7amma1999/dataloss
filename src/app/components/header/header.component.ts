import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { DataListService } from '../../shared/services/data-list.service';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * This class represents the lazy loaded HeaderComponent.
 */
@Component({
  selector: 'app-sd-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() activeMenu = '';

  dataList: any[] = null;
  openNotify = false;
  openProfile = false;
  userRole = '';
  isShownMobileMenu = false;

  constructor(public authService: AuthService,
              public dataListService: DataListService,
              private domSanitizer: DomSanitizer) {}

  /**
   * OnInit
   */
  ngOnInit() {
    this.dataListService.getNotificationData().subscribe(data => {
      this.dataList = data;
    });

    this.userRole = this.authService.getCurrentUser();
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
