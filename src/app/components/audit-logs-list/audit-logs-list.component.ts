import { Component, Input, EventEmitter, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * This class represents the lazy loaded AuditLogsListComponent.
 */
@Component({
  selector: 'app-sd-audit-logs-list',
  templateUrl: 'audit-logs-list.component.html',
  styleUrls: ['audit-logs-list.component.scss']
})
export class AuditLogsListComponent {
  @Input() title: string;
  @Input() tableType = ''; // 'admin-list', 'audit-logs', 'audit-logs-list', 'incident-list'
  @Input() auditLogsFilter: string[];
  @Input() dataList: any[];

  @Output() changeFilter: EventEmitter<any> = new EventEmitter();

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
