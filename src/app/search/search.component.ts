import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchService } from '../search/search.service'
import { DataBindingDirective } from "@progress/kendo-angular-grid";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
 // @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
  public writingComDD: Array<string> = ["Item 1", "Item 2", "Item 3"];
  toDatevalue: any;
  fromDatevalue: any;
  accountSearch: any;
  accountColumn: any;
  public mySelection: string[] = [];
  

  constructor(public searchService: SearchService) { }

  ngOnInit(): void {
     this.accountSearch = this.searchService.accountSearch;
     this.accountColumn = this.searchService.columns;
  }

}
