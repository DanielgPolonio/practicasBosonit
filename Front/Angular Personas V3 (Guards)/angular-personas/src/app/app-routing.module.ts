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
import { PersonResolver } from './resolvers/person.resolver';
// import { PeopleResolver } from './resolvers/people.resolver';

const routes: Routes = [{
  path: 'dashboard',
  redirectTo: '/',
  pathMatch: 'full'
},{
  path: 'detailModal/:id',
  component: PersonModalComponent,
  canActivate: [CheckDetailsGuard]
},{
    path: 'crearPersona',
    component: CrearPersonaComponent
  }, {
    path: 'update/:id',
    component: PersonDetailComponent,
    resolve: {
      person: PersonResolver
    }
  },{
    path: 'delete/:id',
    component: PersonDeleteComponent,
    resolve: {
      person: PersonResolver
    }
  }, {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },{
    path: 'personas',
    component: PersonasComponent,
    // resolve: {
    //   person: PeopleResolver
    // }
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
