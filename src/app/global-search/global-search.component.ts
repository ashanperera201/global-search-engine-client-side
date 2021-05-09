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
    barChartLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    barChartData: [
      { data: [0, 0, 20, 81, 56], label: 'Ikman' },
      { data: [0, 0, 15, 19, 86], label: 'Riyasewana' },
      { data: [0, 0, 5, 13, 40], label: 'Patpat' },
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
    barChartLabels: ['Axio', 'Aqua', 'Toyota', 'Toyota corolla', 'Civic'],
    barChartData: [
      { data: [65, 25, 59, 100, 81], label: 'Terms' }
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
      } else {
        this.toastrService.warning('No results found', 'Warning')
      }
      this.blockUI.stop();
    }, error => {
      console.log(error);
      this.blockUI.stop();
    })
  }
}
