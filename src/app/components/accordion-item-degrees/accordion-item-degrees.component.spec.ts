import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionItemDegreesComponent } from './accordion-item-degrees.component';

describe('AccordionItemDegreesComponent', () => {
  let component: AccordionItemDegreesComponent;
  let fixture: ComponentFixture<AccordionItemDegreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionItemDegreesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionItemDegreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
