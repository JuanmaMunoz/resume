import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeDarkComponent } from './mode-dark.component';

describe('ModeDarkComponent', () => {
  let component: ModeDarkComponent;
  let fixture: ComponentFixture<ModeDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeDarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
