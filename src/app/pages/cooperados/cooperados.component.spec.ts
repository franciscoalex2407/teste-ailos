import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperadosComponent } from './cooperados.component';

describe('CooperadosComponent', () => {
  let component: CooperadosComponent;
  let fixture: ComponentFixture<CooperadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooperadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CooperadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
