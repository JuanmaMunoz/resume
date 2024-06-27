import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSmComponent } from './info-sm.component';

describe('InfoSmComponent', () => {
  let component: InfoSmComponent;
  let fixture: ComponentFixture<InfoSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
