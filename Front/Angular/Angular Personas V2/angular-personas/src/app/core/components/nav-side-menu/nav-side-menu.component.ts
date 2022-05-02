import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { itemsCollapsed, itemsExpanded } from './navmain.config';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-side-menu',
  templateUrl: './nav-side-menu.component.html',
  styleUrls: ['./nav-side-menu.component.scss']
})
export class NavSideMenuComponent implements OnInit {
  @Input() showMenu = true;
  @Output() showMenuEmitter: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  itemsCollapsed: MenuItem[];
  itemsExpanded: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.itemsCollapsed = itemsCollapsed;
    this.itemsExpanded = itemsExpanded;
  }
  changeMenuOnClick() {
    this.showMenu = !this.showMenu;
    this.showMenuEmitter.emit(this.showMenu);
  }
}
