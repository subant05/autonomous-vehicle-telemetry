import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleLiveComponent } from './vehicle-live.component';

describe('VehicleLiveComponent', () => {
  let component: VehicleLiveComponent;
  let fixture: ComponentFixture<VehicleLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleLiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
