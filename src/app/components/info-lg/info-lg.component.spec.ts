import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLgComponent } from './info-lg.component';

describe('InfoLgComponent', () => {
  let component: InfoLgComponent;
  let fixture: ComponentFixture<InfoLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoLgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
