import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { DirectivesModule } from 'src/app/core/directives/directives.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { NavSideMenuComponent } from 'src/app/core/components/nav-side-menu/nav-side-menu.component';
import { BreadcrumbModule } from 'xng-breadcrumb';




@NgModule({
  declarations: [
    MainComponent,
    NavSideMenuComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    
    BreadcrumbModule,
    MainRoutingModule,
    DirectivesModule,
  ]
})
export class MainModule { }
