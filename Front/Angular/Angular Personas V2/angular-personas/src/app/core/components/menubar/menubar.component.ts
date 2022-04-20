import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { EventEmitter } from '@angular/core';
import { menubar } from './menubar.config'

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  @Output() showMenuEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  showMenu: boolean = true;
  notifications: number = 2;
  display: boolean;
  items: MenuItem[];


  constructor(private readonly _router: Router) {
  }

  ngOnInit() {
    this.items = menubar;
  }
  logOut(): void {
    localStorage.removeItem('roles');
    localStorage.removeItem('_t');
    this._router.navigate(['/auth/login']);
  }

  changeMenuOnClick() {
    this.showMenuEmitter.emit(this.showMenu);
    this.showMenu = !this.showMenu;
  }
}
