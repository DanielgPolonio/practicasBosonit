import { Component, Input, OnInit } from '@angular/core';
import { ITableColumn } from './ITableColumns';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() columns: ITableColumn[];
  @Input() data: any[];

  constructor() { }

  ngOnInit() {
  }
}
