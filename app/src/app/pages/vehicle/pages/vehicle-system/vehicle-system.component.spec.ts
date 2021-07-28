import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleSystemComponent } from './vehicle-system.component';

describe('VehicleSystemComponent', () => {
  let component: VehicleSystemComponent;
  let fixture: ComponentFixture<VehicleSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
