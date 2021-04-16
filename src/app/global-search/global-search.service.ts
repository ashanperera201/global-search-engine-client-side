import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalSearchService {

  constructor(private httpClient: HttpClient) { }

  searchTerm = (term: string): Observable<any> => {
    return this.httpClient.get(`${environment.host}/scrape/${term}`);
  }

  getMostVisitedChartData = () => {
    return this.httpClient.get(`${environment.host}/get-visited-data`)
  }

  getMostSearchedKeyWords = (): Observable<any> => {
    return this.httpClient.get(`${environment.host}/get-searched-keywords`)
  }
}
