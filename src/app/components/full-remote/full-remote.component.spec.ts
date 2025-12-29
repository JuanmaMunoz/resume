import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullRemoteComponent } from './full-remote.component';

describe('FullRemoteComponent', () => {
  let component: FullRemoteComponent;
  let fixture: ComponentFixture<FullRemoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullRemoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullRemoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
