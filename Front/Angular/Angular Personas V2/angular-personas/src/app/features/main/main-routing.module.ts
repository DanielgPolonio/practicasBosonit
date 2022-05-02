import { DummyModule } from '../dummy/dummy.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { PageHomeComponent } from '../home/components/page-home/page-home.component';
import { PermissionModule } from '../permission/permission.module';
import { EmployeeComponent } from '../employee/employee.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'empleados',
        component: EmployeeComponent,
      },
      {
        path: 'dummy',
        loadChildren: () => DummyModule,
      },
      {
        path: 'permission',
        loadChildren: () => PermissionModule,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
