import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  PersonasComponent
} from './components/personas/personas.component';
import {
  DashboardComponent
} from './components/dashboard/dashboard.component';
import {
  PersonDetailComponent
} from './components/person-detail/person-detail.component';
import {
  CrearPersonaComponent
} from './components/crear-persona/crear-persona.component';
import { PersonModalComponent } from './components/person-modal/person-modal.component';


const routes: Routes = [{
  path: 'detailModal/:id',
  component: PersonModalComponent
},{
    path: 'crearPersona',
    component: CrearPersonaComponent
  }, {
    path: 'update/:id',
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
