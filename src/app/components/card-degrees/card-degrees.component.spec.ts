import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDegreesComponent } from './card-degrees.component';

describe('CardDegreesComponent', () => {
  let component: CardDegreesComponent;
  let fixture: ComponentFixture<CardDegreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDegreesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDegreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
