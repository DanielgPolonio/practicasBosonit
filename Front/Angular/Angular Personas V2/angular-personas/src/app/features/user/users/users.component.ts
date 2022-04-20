import { Component, OnInit } from '@angular/core';
import { ITableColumn } from 'src/app/shared/components/table/ITableColumns';
import { columns, employees } from '../data-employees';
import { IEmployee } from '../IEmployee';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  columns: ITableColumn[];
  data: IEmployee[];

  constructor() { }

  ngOnInit() {
    this.columns = columns
    this.data = employees
  }
}
