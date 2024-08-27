import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './searchfilter.component.html',
  styleUrls: ['./searchfilter.component.scss'],
})
export class SearchFilterComponent implements OnInit {
  public dummyData = [
    '1.First Data',
    '2.Second Data',
    '3.Third.Data',
    '4.Fourth Data',
    '5.Fifth Data',
  ];
  public filteredData;
  constructor() {}

  ngOnInit() {
    this.filteredData = this.dummyData;
  }

  getSearchedResult(searchKey: string) {
    if (!searchKey) {
      this.filteredData = this.dummyData;
    } else {
      this.filteredData = this.dummyData.filter((data) =>
        data.includes(searchKey)
      );
    }
  }
}
