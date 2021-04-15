import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss']
})
export class GlobalSearchComponent implements OnInit {
  mostVisitedAnalysis: any = {};
  searchedresults: any[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.initializeMostVisitedChart();
  }

  initializeMostVisitedChart = () => {
    this.mostVisitedAnalysis = {
      title: 'Most visited sites',
      type: ChartType.BarChart,
      data: [
        ['Copper', 8.94],
        ['Silver', 10.49],
        ['Gold', 19.3],
        ['Platinum', 21.45]
      ],
      columns: ['Element', 'Density'],
      options: {
        animation: {
          duration: 250,
          easing: 'ease-in-out',
          startup: true
        }
      }
    }
  }

  searchedTerm = (term: string) => {
    console.log(term);
    this.httpClient.get("serachTerm/term").subscribe((serviceResult: any) => {
      debugger
      if (serviceResult) {
        this.searchedresults = serviceResult;
      }
    }, error => {
      console.log(error);
    })
  }
}
