import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsLgComponent } from './skills-lg.component';

describe('SkillsLgComponent', () => {
  let component: SkillsLgComponent;
  let fixture: ComponentFixture<SkillsLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsLgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
