import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleGeolocationComponent } from './vehicle-geolocation.component';

describe('VehicleGeolocationComponent', () => {
  let component: VehicleGeolocationComponent;
  let fixture: ComponentFixture<VehicleGeolocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleGeolocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleGeolocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
