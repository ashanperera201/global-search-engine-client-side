import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { gateway } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalSearchService {

  constructor(private httpClient: HttpClient) { }

  searchTerm = (term: string): Observable<any> => {
    return this.httpClient.get(`${gateway.server}/scrape/${term}`);
  }

  getMostVisitedChartData = () => {
    return this.httpClient.get(`${gateway.server}/get-visited-data`)
  }

  getMostSearchedKeyWords = (): Observable<any> => {
    return this.httpClient.get(`${gateway.server}/get-searched-keywords`)
  }
}
