import { CreateItemDummyComponent } from './components/create-item-dummy/create-item-dummy.component';
import { DummyListComponent } from './components/dummy-list/dummy-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesGuard } from '../../../app/core/guards/roles.guard';

const routes: Routes = [
  {
    path: '',
    component: DummyListComponent,
    canActivate: [RolesGuard],
    data: {
      roles: ['USER.SUPERADMIN', 'USER.ADMIN', 'DUMMY.READ']
    }
  },
  {
    path: 'create',
    component: CreateItemDummyComponent,
    canActivate: [RolesGuard],
    data: {
      roles: ['USER.SUPERADMIN', 'USER.ADMIN', 'DUMMY.WRITE']
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DummyRoutingModule { }
