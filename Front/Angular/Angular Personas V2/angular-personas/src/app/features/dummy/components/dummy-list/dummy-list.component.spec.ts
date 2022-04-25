import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {
  render,
  RenderResult,
  screen
} from '@testing-library/angular';
import { Observable, of } from 'rxjs';
import { DirectivesModule } from '../../../../../app/core/directives/directives.module';
import { Dummy } from '../../interfaces/dummy.interface';
import { DummyRoutingModule } from './../../dummy-routing.module';
import { DummyService } from './../../services/dummy.service';
import { CreateItemDummyComponent } from './../create-item-dummy/create-item-dummy.component';
import { FormDummyComponent } from './../form-dummy/form-dummy.component';
import { DummyListComponent } from './dummy-list.component';

class DummyServiceMock {
  getAll(): Observable<Dummy[]> {
    const dummyFake1: Dummy = {
      firstName: 'testing',
      lastName: 'library',
      isActive: true,
    };
    return of([dummyFake1]);
  }
  create(): Observable<boolean> {
    return of(true);
  }
}

const mockRouter = {
  navigate: jest.fn(),
};

describe('DummyListComponent', () => {
  it('show items in list', async () => {
    await renderComponentWithRouter();
    expect(screen.getByText(/testing/i));
  });
});

async function renderComponentWithRouter(): Promise<
  RenderResult<DummyListComponent>
> {
  return await render(DummyListComponent, {
    declarations: [CreateItemDummyComponent, FormDummyComponent],
    imports: [
      DirectivesModule,
      DummyRoutingModule,
      ReactiveFormsModule,
      RouterTestingModule.withRoutes([]),
    ],
    providers: [
      {
        provide: DummyService,
        useClass: DummyServiceMock,
      },
    ],
  });
}
