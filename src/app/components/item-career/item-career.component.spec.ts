import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCareerComponent } from './item-career.component';

describe('AccordionItemCareerComponent', () => {
  let component: ItemCareerComponent;
  let fixture: ComponentFixture<ItemCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemCareerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
