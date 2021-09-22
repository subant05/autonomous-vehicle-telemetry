import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleShareComponent } from './vehicle-share.component';

describe('VehicleShareComponent', () => {
  let component: VehicleShareComponent;
  let fixture: ComponentFixture<VehicleShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
