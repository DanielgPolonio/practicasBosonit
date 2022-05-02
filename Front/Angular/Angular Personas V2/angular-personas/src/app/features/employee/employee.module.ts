import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { EmployeeComponent } from './employee.component';


@NgModule({
  declarations: [
    EmployeeComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
