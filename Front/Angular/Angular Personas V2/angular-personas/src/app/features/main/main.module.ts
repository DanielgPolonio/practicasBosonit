import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { DirectivesModule } from 'src/app/core/directives/directives.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';




@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    SharedModule,
    CommonModule,    
    MainRoutingModule,
    DirectivesModule,
  ]
})
export class MainModule { }
