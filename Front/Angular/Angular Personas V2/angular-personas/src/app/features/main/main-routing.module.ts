import { DummyModule } from '../dummy/dummy.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { PageHomeComponent } from '../home/components/page-home/page-home.component';
import { PermissionModule } from '../permission/permission.module';
import { FirstComponent } from '../first/first.component';
import { UserModule } from '../user/user.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: PageHomeComponent,
      },
      {
        path: 'dummy',
        loadChildren: () => DummyModule,
      },
      {
        path: 'permission',
        loadChildren: () => PermissionModule,
      },
      {
        path: 'test',
        component:  FirstComponent
      },
      {
        path: 'users',
        loadChildren: () => UserModule,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }