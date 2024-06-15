import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceMenuItemComponent } from './experience-menu-item.component';

describe('ExperienceMenuItemComponent', () => {
  let component: ExperienceMenuItemComponent;
  let fixture: ComponentFixture<ExperienceMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceMenuItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
