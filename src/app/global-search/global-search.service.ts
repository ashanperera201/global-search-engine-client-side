import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalSearchService {

  constructor(private httpClient: HttpClient) { }

  searchTerm = (term: string) => {
    // TODO : bind the term when it's available from backend.
    return this.httpClient.get(`${environment.host}/scrape`);
  }
}
