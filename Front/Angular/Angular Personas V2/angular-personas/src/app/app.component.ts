import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'crmjaenangular';
  constructor(private config: PrimeNGConfig, private translate: TranslateService) {
    
  }

  ngOnInit(){
    //ngx translate
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    //Translation for primeng Calendar
    this.translate.get('primeng').subscribe(res => this.config.setTranslation(res));
  }

}
