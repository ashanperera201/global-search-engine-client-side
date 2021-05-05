import { Component, OnInit, HostListener } from '@angular/core';
// import { ChartType } from 'angular-google-charts';
import { GlobalSearchService } from './global-search.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { switchMap } from 'rxjs/operators';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

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


  barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins:any = [pluginDataLabels];

  barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];


  constructor(private globalSearchService: GlobalSearchService) { }

  ngOnInit() {
    // this.loadChartingData();
  }

  // loadChartingData = () => {
  //   this.blockUI.start("Loading.......");
  //   this.globalSearchService.getMostVisitedChartData().pipe(switchMap((visitedData: any) => {
  //     if (visitedData) {
  //       // set visited data
  //       this.mostVisitedAnalysis = {
  //         title: 'Most visited sites',
  //         type: ChartType.BarChart,
  //         data: visitedData.data,
  //         columns: visitedData.columns,
  //         options: {
  //           animation: {
  //             duration: 250,
  //             easing: 'ease-in-out',
  //             startup: true
  //           }
  //         }
  //       }

  //     }
  //     return this.globalSearchService.getMostSearchedKeyWords();
  //   })).subscribe((keyWords: any) => {
  //     if (keyWords) {

  //       // set searched keywords
  //       this.mostSearchedKeyWord = {
  //         title: 'Most searched keyword',
  //         type: ChartType.BarChart,
  //         data: keyWords.data,
  //         columns: keyWords.columns,
  //         options: {
  //           animation: {
  //             duration: 250,
  //             easing: 'ease-in-out',
  //             startup: true
  //           }
  //         }
  //       }
  //       this.blockUI.stop();
  //     }
  //   }, error => {
  //     this.blockUI.stop();
  //     console.log(error);
  //   })
  // }

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

  // @HostListener('window:resize', ['$event'])
  // onResize(event: any) {
  //   if (event.target.innerWidth > 1300) {
  //     this.chartWidth = event.target.innerWidth / 2.2;
  //     this.chartHieght = 420;
  //   } else {
  //     this.chartWidth = event.target.innerWidth / 1.8;
  //     this.chartHieght = 420 / 2;
  //   }
  // }
}
