import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { AssignPermissionsComponent } from './assign-permissions/assign-permissions.component';
import { PermissionRoutingModule } from './permission-routing.module';

@NgModule({
  declarations: [AssignPermissionsComponent],
  imports: [CommonModule, PermissionRoutingModule, ReactiveFormsModule, SharedModule
  ],
})
export class PermissionModule { }
