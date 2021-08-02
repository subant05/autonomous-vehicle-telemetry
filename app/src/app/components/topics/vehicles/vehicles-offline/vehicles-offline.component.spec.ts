import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesOfflineComponent } from './vehicles-offline.component';

describe('VehiclesOfflineComponent', () => {
  let component: VehiclesOfflineComponent;
  let fixture: ComponentFixture<VehiclesOfflineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesOfflineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesOfflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
