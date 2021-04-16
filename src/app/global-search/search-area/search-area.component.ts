import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.scss']
})
export class SearchAreaComponent implements OnInit {
  @Output() searchedTerm: EventEmitter<string> = new EventEmitter<string>();
  searchKey: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onSearch = (e: any) => {
    const searchTerm = e.target.value;
    this.searchedTerm.emit(searchTerm);
  }

  onSearchClickHander = () => {
    this.searchedTerm.emit(this.searchKey);
  }

  onClick = () => {
    if (this.searchKey) {
      this.searchedTerm.emit(this.searchKey);
    }
  }
}
