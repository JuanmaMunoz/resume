import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionItemCareerComponent } from './accordion-item-career.component';

describe('AccordionItemCareerComponent', () => {
  let component: AccordionItemCareerComponent;
  let fixture: ComponentFixture<AccordionItemCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionItemCareerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionItemCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
