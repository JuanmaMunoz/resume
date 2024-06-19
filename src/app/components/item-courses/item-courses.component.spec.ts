import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCoursesComponent } from './item-courses.component';

describe('ItemCoursesComponent', () => {
  let component: ItemCoursesComponent;
  let fixture: ComponentFixture<ItemCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemCoursesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
