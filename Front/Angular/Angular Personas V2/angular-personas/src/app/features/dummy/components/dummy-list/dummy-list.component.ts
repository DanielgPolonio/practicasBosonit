import { DummyService } from './../../services/dummy.service';
import { Dummy } from './../../interfaces/dummy.interface';
import { Component, OnInit } from '@angular/core';
import { InitPermission } from '../../../../core/directives/interfaces/need-permission';

@Component({
  selector: 'app-dummy-list',
  templateUrl: './dummy-list.component.html',
  styleUrls: ['./dummy-list.component.scss'],
})
export class DummyListComponent extends InitPermission implements OnInit {
  dummyList: Dummy[] = [];

  constructor(private readonly dummyService: DummyService) {
    super();
    this.dummyService.getAll().subscribe((dummyList: Dummy[]) => {
      this.dummyList = dummyList;
    });
  }

  ngOnInit(): void { }
}
