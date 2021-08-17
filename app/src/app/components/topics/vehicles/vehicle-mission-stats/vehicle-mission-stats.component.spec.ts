import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleMissionStatsComponent } from './vehicle-mission-stats.component';

describe('VehicleMissionStatsComponent', () => {
  let component: VehicleMissionStatsComponent;
  let fixture: ComponentFixture<VehicleMissionStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleMissionStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleMissionStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
