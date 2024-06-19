import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsSmComponent } from './skills-sm.component';

describe('SkillsSmComponent', () => {
  let component: SkillsSmComponent;
  let fixture: ComponentFixture<SkillsSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsSmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
