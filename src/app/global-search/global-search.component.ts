import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { GlobalSearchService } from './global-search.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss']
})
export class GlobalSearchComponent implements OnInit {
  mostVisitedAnalysis: any = {};
  searchedresults: any[] = [];
  @BlockUI() blockUI!: NgBlockUI;

  constructor(private globalSearchService: GlobalSearchService) { }

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
    this.blockUI.start("Loading.......");
    this.globalSearchService.searchTerm(term).subscribe((serviceResult: any) => {
      if (serviceResult) {
        this.searchedresults = serviceResult;
        this.blockUI.stop();
      }
    }, error => {
      console.log(error);
      this.blockUI.stop();
    })
  }
}
