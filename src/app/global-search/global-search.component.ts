import { Component, OnInit, HostListener } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { GlobalSearchService } from './global-search.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss']
})
export class GlobalSearchComponent implements OnInit {
  mostVisitedAnalysis: any = {};
  mostSearchedKeyWord: any = {};
  searchedresults: any[] = [];
  @BlockUI() blockUI!: NgBlockUI;
  chartWidth: number = 420;

  constructor(private globalSearchService: GlobalSearchService) { }

  ngOnInit() {
    this.loadChartingData();
  }

  loadChartingData = () => {
    this.blockUI.start("Loading.......");
    this.globalSearchService.getMostVisitedChartData().pipe(switchMap((visitedData: any) => {
      if (visitedData) {
        // set visited data
        this.mostVisitedAnalysis = {
          title: 'Most visited sites',
          type: ChartType.BarChart,
          data: visitedData.data,
          columns: visitedData.columns,
          options: {
            animation: {
              duration: 250,
              easing: 'ease-in-out',
              startup: true
            }
          }
        }

      }
      return this.globalSearchService.getMostSearchedKeyWords();
    })).subscribe((keyWords: any) => {
      if (keyWords) {

        // set searched keywords
        this.mostSearchedKeyWord = {
          title: 'Most searched keyword',
          type: ChartType.BarChart,
          data: keyWords.data,
          columns: keyWords.columns,
          options: {
            animation: {
              duration: 250,
              easing: 'ease-in-out',
              startup: true
            }
          }
        }
        this.blockUI.stop();
      }
    }, error => {
      this.blockUI.stop();
      console.log(error);
    })
  }

  searchedTerm = (term: string) => {
    // searching part
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

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth > 1600) {
      this.chartWidth = 420;
    } else {
      this.chartWidth = event.target.innerWidth;
    }
  }
}
