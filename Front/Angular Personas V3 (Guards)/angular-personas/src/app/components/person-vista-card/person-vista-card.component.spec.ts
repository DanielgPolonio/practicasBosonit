import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonVistaCardComponent } from './person-vista-card.component';

describe('PersonVistaCardComponent', () => {
  let component: PersonVistaCardComponent;
  let fixture: ComponentFixture<PersonVistaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonVistaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonVistaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
