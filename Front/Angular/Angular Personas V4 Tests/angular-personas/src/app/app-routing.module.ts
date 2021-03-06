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
  PersonDetailComponent
} from './components/person-detail/person-detail.component';
import {
  CrearPersonaComponent
} from './components/crear-persona/crear-persona.component';
import { PersonModalComponent } from './components/person-modal/person-modal.component';
import { PersonDeleteComponent } from './components/person-delete/person-delete.component';
import { PersonVistaCardComponent } from './components/person-vista-card/person-vista-card.component';
import { CheckDetailsGuard } from './guards/check-details.guard';

const routes: Routes = [{
  path: 'dashboard',
  redirectTo: '/',
  pathMatch: 'full'
},{
  path: 'detailModal/:id',
  component: PersonModalComponent,
  canActivate: [CheckDetailsGuard],
  data: {}
},{
    path: 'crearPersona',
    component: CrearPersonaComponent
  }, {
    path: 'update/:id',
    component: PersonDetailComponent
  },{
    path: 'delete/:id',
    component: PersonDeleteComponent
  }, {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },{
    path: 'personas',
    component: PersonasComponent
  },{
    path: 'personasCard',
    component: PersonVistaCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
