import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public writingComDD: Array<string> = ["Item 1", "Item 2", "Item 3"];
  toDatevalue: any;
  fromDatevalue: any;
  constructor() { }

  ngOnInit(): void {
  }

}
