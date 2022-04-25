import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DummyRoutingModule } from './dummy-routing.module';
import { DummyListComponent } from './components/dummy-list/dummy-list.component';
import { CreateItemDummyComponent } from './components/create-item-dummy/create-item-dummy.component';
import { FormDummyComponent } from './components/form-dummy/form-dummy.component';
import { DirectivesModule } from 'src/app/core/directives/directives.module';

@NgModule({
  declarations: [
    DummyListComponent,
    CreateItemDummyComponent,
    FormDummyComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    DummyRoutingModule,
    DirectivesModule
  ]
})
export class DummyModule { }
