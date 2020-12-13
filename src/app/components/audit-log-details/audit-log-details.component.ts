import { Component, Input, EventEmitter, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * This class represents the lazy loaded HeaderComponent.
 */
@Component({
  selector: 'app-sd-audit-log-details',
  templateUrl: 'audit-log-details.component.html',
  styleUrls: ['audit-log-details.component.scss']
})
export class AuditLogDetailsComponent {
  @Input() dataList: any[] = [];
  @Output() closeDetails: EventEmitter<any> = new EventEmitter();

  constructor(private domSanitizer: DomSanitizer) {}

  /**
   * get Content Trusted
   * @param content converted content
   * @return trusted content
   */
  getContentTrusted(content) {
    return this.domSanitizer.bypassSecurityTrustHtml(content);
  }
}
