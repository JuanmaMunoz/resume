import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalGrowthComponent } from './profesional-growth.component';

describe('ProfesionalGrowthComponent', () => {
  let component: ProfesionalGrowthComponent;
  let fixture: ComponentFixture<ProfesionalGrowthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesionalGrowthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesionalGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
