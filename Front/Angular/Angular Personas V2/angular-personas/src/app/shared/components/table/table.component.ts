import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITableColumn, typeColumn } from './ITableColumns';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() columns: ITableColumn[];
  @Input() data: any[];
  @Output() onClickButtonAction:EventEmitter<any> = new EventEmitter<any>();
  typeColumn = typeColumn;
  

  constructor() {}

  ngOnInit() {
  }

  onClickActionButton(eventName : string, id : number){    
    this.onClickButtonAction.emit(
      {
        action: eventName,
        data: id
      }
    );
   }
}
