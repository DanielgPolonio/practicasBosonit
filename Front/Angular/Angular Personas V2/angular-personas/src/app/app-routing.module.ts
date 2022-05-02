import { AuthModule } from './features/auth/auth.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModule } from './features/main/main.module';
import { AuthGuard } from './core/guards/auth.guard';
import { EmployeeModule } from './features/employee/employee.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => MainModule,
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => AuthModule,
  },
  {
    path: 'empleados',
    loadChildren: () => EmployeeModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
