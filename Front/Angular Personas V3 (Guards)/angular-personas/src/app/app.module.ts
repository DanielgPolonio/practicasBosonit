import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponent } from './components/personas/personas.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MessagesComponent } from './components/messages/messages.component';
import { CrearPersonaComponent } from './components/crear-persona/crear-persona.component';
import { PersonSearchComponent } from './components/person-search/person-search.component';
import { PersonModalComponent } from './components/person-modal/person-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonDeleteComponent } from './components/person-delete/person-delete.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { PersonVistaCardComponent } from './components/person-vista-card/person-vista-card.component'

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonDetailComponent,
    MessagesComponent,
    CrearPersonaComponent,
    PersonSearchComponent,
    PersonModalComponent,
    PersonDeleteComponent,
    DashboardComponent,
    PersonVistaCardComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatNativeDateModule, MatMenuModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
