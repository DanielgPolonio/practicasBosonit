import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  PersonasComponent
} from './personas/personas.component';
import {
  DashboardComponent
} from './dashboard/dashboard.component';
import {
  PersonDetailComponent
} from './person-detail/person-detail.component';
import {
  CrearPersonaComponent
} from './crear-persona/crear-persona.component';


const routes: Routes = [{
    path: 'crearPersona',
    component: CrearPersonaComponent
  }, {
    path: 'detail/:id',
    component: PersonDetailComponent
  }, {
    path: '',
    redirectTo: '/personas',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'personas',
    component: PersonasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
