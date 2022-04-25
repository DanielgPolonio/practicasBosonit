import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

 sendMenu:boolean;

 constructor(private _translate: TranslateService) {
  _translate.addLangs(['es', 'en']);
  _translate.setDefaultLang('es');
  _translate.use('es');
}
  ngOnInit(): void {
  }

  public showMenuHandler(showMenu: any):void{
    this.sendMenu=showMenu;
  }
}
