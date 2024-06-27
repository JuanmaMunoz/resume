import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreesItemComponent } from './degrees-item.component';

describe('DegreesItemComponent', () => {
  let component: DegreesItemComponent;
  let fixture: ComponentFixture<DegreesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DegreesItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DegreesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
