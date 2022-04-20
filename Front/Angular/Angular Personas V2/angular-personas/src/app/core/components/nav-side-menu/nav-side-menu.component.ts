import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { itemsExpanded, itemsCollapsed } from './navmain.config';


@Component({
  selector: 'app-nav-side-menu',
  templateUrl: './nav-side-menu.component.html',
  styleUrls: ['./nav-side-menu.component.scss']
})
export class NavSideMenuComponent implements OnInit {
  
  @Input() showMenu: boolean = true;
  itemsCollapsed: MenuItem[];
  itemsExpanded: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.itemsCollapsed = itemsCollapsed;
    this.itemsExpanded = itemsExpanded;
  }
}
