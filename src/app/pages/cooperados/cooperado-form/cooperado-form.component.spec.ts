import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperadoFormComponent } from './cooperado-form.component';

describe('CooperadoFormComponent', () => {
  let component: CooperadoFormComponent;
  let fixture: ComponentFixture<CooperadoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooperadoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CooperadoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
