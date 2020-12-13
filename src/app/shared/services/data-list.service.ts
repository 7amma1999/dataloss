import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

/**
 * This class provides the DataListService service
 */
@Injectable()
export class DataListService {
  private apiUrl = environment.apiBase;  // URL to web api

  /**
   * Creates a new DataListService with the injected HttpClient.
   */
  constructor(protected httpClient: HttpClient) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   */
  getData(urlAddress: string): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiUrl + urlAddress);
  }

  /**
   * GET summary data for Admin Management page
   */
  getAdminSummaryData(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiUrl + 'dataAdminSummary.json');
  }

  /**
   * GET table data for Admin Management page
   */
  getAdminListData(tableFilterData): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiUrl + 'dataAdminList.json');
  }

  /**
   * GET data for Audit Logs page
   */
  getAuditLogsData(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiUrl + 'dataAuditLogs.json');
  }

  /**
   * GET summary data for Incident List page
   */
  getIncidentSummaryData(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiUrl + 'dataIncidentSummary.json');
  }

  /**
   * GET table data for Incident List page
   */
  getIncidentListData(tableFilterData): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiUrl + 'dataIncidentList.json');
  }

  /**
   * GET data for Audit Logs of Access Control
   */
  getAuditLogsAccessControlData(tableFilterData: string): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiUrl + 'dataAuditLogsAccessControl.json');
  }

  /**
   * GET data for Audit Logs of Incident
   */
  getAuditLogsIncidentData(tableFilterData: string): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiUrl + 'dataAuditLogsIncident.json');
  }

  /**
   * GET data for User List in modal windows
   */
  getUserListData(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiUrl + 'dataUserList.json');
  }

  /**
   * GET data for Notification
   */
  getNotificationData(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiUrl + 'dataNotification.json');
  }
}
