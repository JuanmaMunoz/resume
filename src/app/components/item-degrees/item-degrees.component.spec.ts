import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDegreesComponent } from './item-degrees.component';

describe('ItemDegreesComponent', () => {
  let component: ItemDegreesComponent;
  let fixture: ComponentFixture<ItemDegreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemDegreesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemDegreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
