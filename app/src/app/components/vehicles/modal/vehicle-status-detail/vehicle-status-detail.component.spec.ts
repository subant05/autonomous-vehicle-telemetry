import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleStatusDetailComponent } from './vehicle-status-detail.component';

describe('VehicleStatusDetailComponent', () => {
  let component: VehicleStatusDetailComponent;
  let fixture: ComponentFixture<VehicleStatusDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleStatusDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleStatusDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
