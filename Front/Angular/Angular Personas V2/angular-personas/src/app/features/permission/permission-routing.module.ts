import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignPermissionsComponent } from './assign-permissions/assign-permissions.component';

const routes: Routes = [
  { path: 'assign-permissions', component: AssignPermissionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermissionRoutingModule { }
