import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss']
})
export class GlobalSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchedTerm = (term: string) => {
    console.log(term);
  }
}
