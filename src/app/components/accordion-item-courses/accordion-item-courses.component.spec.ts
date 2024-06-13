import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionItemCoursesComponent } from './accordion-item-courses.component';

describe('AccordionItemCoursesComponent', () => {
  let component: AccordionItemCoursesComponent;
  let fixture: ComponentFixture<AccordionItemCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionItemCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionItemCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
