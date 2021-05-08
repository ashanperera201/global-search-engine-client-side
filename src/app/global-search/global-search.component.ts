import { Component, OnInit } from '@angular/core';
import { GlobalSearchService } from './global-search.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { switchMap } from 'rxjs/operators';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { ToastrService } from 'ngx-toastr';

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


  // finalized data object.
  mostVisited: any = {
    barChartType: 'bar',
    barChartLabels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    barChartData: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ],
    barChartPlugins: [pluginDataLabels],
    barChartLegend: true,
    barChartOptions: {
      responsive: true,
      scales: { xAxes: [{}], yAxes: [{}] },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
        }
      }
    }
  }

  // finalized data object.
  mostSearchedTerms: any = {
    barChartType: 'bar',
    barChartLabels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    barChartData: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ],
    barChartPlugins: [pluginDataLabels],
    barChartLegend: true,
    barChartOptions: {
      responsive: true,
      scales: { xAxes: [{}], yAxes: [{}] },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
        }
      }
    }
  }

  constructor(private globalSearchService: GlobalSearchService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.loadChartingData();
  }

  loadChartingData = () => {
    this.blockUI.start("Retreiving.......");
    this.globalSearchService.getMostVisitedChartData().pipe(switchMap((visitedData: any) => {
      if (visitedData) {
        this.mostVisited.barChartLabels = visitedData.barChartLabels;
        this.mostVisited.barChartData = visitedData.barChartData;
      }
      return this.globalSearchService.getMostSearchedKeyWords();
    })).subscribe((keyWords: any) => {
      if (keyWords) {
        this.mostVisited.barChartLabels = keyWords.barChartLabels;
        this.mostVisited.barChartData = keyWords.barChartData;
      }
      this.blockUI.stop();
    }, error => {
      this.blockUI.stop();
      console.log(error);
    })
  }

  loadChartData = () => {

  }

  searchedTerm = (term: string) => {
    // searching part
    this.blockUI.start("Retreiving.......");
    this.globalSearchService.searchTerm(term).subscribe((serviceResult: any) => {
      if (serviceResult && serviceResult.length > 0) {
        this.searchedresults = serviceResult;
        this.blockUI.stop();
      }else{
        this.toastrService.warning('No results found','Warning')
      }
      this.blockUI.stop();
    }, error => {
      console.log(error);
      this.blockUI.stop();
    })
  }
}
