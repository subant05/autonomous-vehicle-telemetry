import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleLoggingComponent } from './vehicle-logging.component';

describe('VehicleLoggingComponent', () => {
  let component: VehicleLoggingComponent;
  let fixture: ComponentFixture<VehicleLoggingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleLoggingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleLoggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
