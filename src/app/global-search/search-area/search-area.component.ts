import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.scss']
})
export class SearchAreaComponent implements OnInit, AfterViewInit {
  @Output() searchedTerm: EventEmitter<string> = new EventEmitter<string>();
  searchKey: string = '';
  @ViewChild('search', { static: false }) searchInput!: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => this.searchInput.nativeElement.select());
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
