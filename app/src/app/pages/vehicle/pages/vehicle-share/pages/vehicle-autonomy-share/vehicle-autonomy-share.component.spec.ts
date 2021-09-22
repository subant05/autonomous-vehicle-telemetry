import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleAutonomyShareComponent } from './vehicle-autonomy-share.component';

describe('VehicleAutonomyShareComponent', () => {
  let component: VehicleAutonomyShareComponent;
  let fixture: ComponentFixture<VehicleAutonomyShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleAutonomyShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleAutonomyShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
